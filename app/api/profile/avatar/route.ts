import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function POST(request: NextRequest) {
    try {
        console.log("Avatar upload request started");
        
        // Check environment variables
        if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
            console.error("Missing Supabase environment variables");
            return NextResponse.json({ 
                error: 'Configuration error', 
                details: 'Supabase environment variables are not configured'
            }, { status: 500 });
        }
        
        const user = await getUser();
        if (!user) {
            console.log("No user found - unauthorized");
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        
        console.log("User authenticated:", user.id);

        // Create a Supabase client with service role key for server-side operations
        // This bypasses RLS policies and is the correct approach for server-side operations
        const supabase = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!,
            {
                auth: {
                    autoRefreshToken: false,
                    persistSession: false
                }
            }
        );
        
        // Test Supabase connection with service role client
        try {
            const { data, error } = await supabase.storage.listBuckets();
            if (error) {
                console.error("Supabase connection test failed:", error);
                return NextResponse.json({ 
                    error: 'Storage service unavailable', 
                    details: error.message
                }, { status: 500 });
            }
            console.log("Supabase connection test successful");
        } catch (connectionError) {
            console.error("Supabase connection error:", connectionError);
            return NextResponse.json({ 
                error: 'Storage service connection failed', 
                details: connectionError instanceof Error ? connectionError.message : 'Unknown connection error'
            }, { status: 500 });
        }

        const form = await request.formData();
        const file = form.get('file') as File | null;
        if (!file) {
            console.log("No file provided");
            return NextResponse.json('File Missing', { status: 400 });
        }

        console.log("File received:", file.name, "Size:", file.size);

        // Validate file type
        if (!file.type.startsWith('image/')) {
            console.log("Invalid file type:", file.type);
            return NextResponse.json('Invalid file type. Only images are allowed.', { status: 400 });
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            console.log("File too large:", file.size);
            return NextResponse.json('File too large. Maximum size is 5MB.', { status: 400 });
        }

        // unique filename: userId-timestamp.ext
        const ext = file.name.split('.').pop();
        const filename = `${user.id}/${Date.now()}.${ext}`;
        
        console.log("Uploading to Supabase with filename:", filename);

        const { error: uploadError, data: uploadData } = await supabase.storage
            .from('user-avatars')
            .upload(filename, file, { upsert: true });

        if (uploadError) {
            console.error("Supabase upload error:", uploadError);
            return NextResponse.json({ error: 'Upload failed', details: uploadError.message }, { status: 500 });
        }

        console.log("File uploaded successfully to Supabase");

        const { data: urlData } = supabase.storage
            .from('user-avatars')
            .getPublicUrl(filename);

        console.log("Public URL generated:", urlData.publicUrl);

        // Update user record in database
        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: { avatarUrl: urlData.publicUrl },
        });

        console.log("User record updated successfully");

        return NextResponse.json({ avatarUrl: urlData.publicUrl });
        
    } catch (error) {
        console.error("Avatar upload error:", error);
        return NextResponse.json({ 
            error: 'Internal server error', 
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}