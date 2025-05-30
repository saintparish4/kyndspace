import { authClient } from "@/lib/auth-client";


export async function signIn(email: string, password: string) {
    const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
        rememberMe: false,
    });
    return { data, error };
}
