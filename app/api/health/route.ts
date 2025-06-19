import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import prisma from "@/lib/prisma";

export async function GET() {
    const health = {
        timestamp: new Date().toISOString(),
        status: 'ok',
        services: {
            supabase: 'unknown',
            database: 'unknown',
            environment: 'unknown'
        },
        errors: [] as string[]
    };

    // Check environment variables
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
        health.services.environment = 'error';
        health.errors.push('Missing Supabase environment variables');
    } else {
        health.services.environment = 'ok';
    }

    // Test Supabase connection
    try {
        const { data, error } = await supabase.storage.listBuckets();
        if (error) {
            health.services.supabase = 'error';
            health.errors.push(`Supabase error: ${error.message}`);
        } else {
            health.services.supabase = 'ok';
        }
    } catch (error) {
        health.services.supabase = 'error';
        health.errors.push(`Supabase connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Test database connection
    try {
        await prisma.$queryRaw`SELECT 1`;
        health.services.database = 'ok';
    } catch (error) {
        health.services.database = 'error';
        health.errors.push(`Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Set overall status
    if (health.errors.length > 0) {
        health.status = 'error';
    }

    return NextResponse.json(health, { 
        status: health.status === 'ok' ? 200 : 500 
    });
} 