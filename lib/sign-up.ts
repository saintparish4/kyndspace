import { authClient } from "./auth-client";

export async function signUp(email: string, password: string, name: string, image: string) {
    const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        image,
        callbackURL: "/",
    }, {
        onRequest: (context) => {
            console.log("onRequest", context);
        },
        onSuccess: (context) => {
            console.log("onSuccess", context);
        },
        onError: (context) => {
            console.log("onError", context);
        }
    });

    return { data, error };
}