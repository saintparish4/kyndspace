import { authClient } from "@/lib/auth-client";

export async function signInWithGoogle() {
    const { data, error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
        errorCallbackURL: "/error",
        newUserCallbackURL: "/welcome",
        disableRedirect: true,
    });
    return { data, error };
}
