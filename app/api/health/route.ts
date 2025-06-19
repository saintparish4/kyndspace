import { NextResponse } from "next/server";

export async function GET() {
    try {
        const health = {
            timestamp: new Date().toISOString(),
            status: 'ok',
            services: {
                basic: 'ok',
                environment: 'unknown',
                supabase: 'unknown',
                database: 'unknown'
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

        // Set overall status
        if (health.errors.length > 0) {
            health.status = 'error';
        }

        return NextResponse.json(health, { 
            status: health.status === 'ok' ? 200 : 500 
        });
    } catch (error) {
        // Fallback error response if anything goes wrong
        return NextResponse.json({
            timestamp: new Date().toISOString(),
            status: 'error',
            services: {
                basic: 'error',
                environment: 'unknown',
                supabase: 'unknown',
                database: 'unknown'
            },
            errors: [`Health check failed: ${error instanceof Error ? error.message : 'Unknown error'}`]
        }, { 
            status: 500 
        });
    }
} 