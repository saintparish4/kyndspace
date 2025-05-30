import { auth } from "@/lib/auth";

export async function signInEmail(email: string, password: string) {
    const response = await auth.api.signInEmail({
        body: {
            email,
            password
        },
        asResponse: true // returns a response object instead of data
    });
    return response;
} 