import { authClient } from "@/lib/auth-client";

export async function signUp(email: string, password: string, name: string, image: string) {
    const { data, error } = await authClient.signUp.email({
        email, // email address // name
        password, // password
        name, // name
        image, // image
        callbackURL: "/", // callback URL to redirect to after sign up        
 }, {
    onRequest: () => {
        // show loading spinner
    },
    onSuccess: () => {
        // hide loading spinner
        // redirect to home page
    },
    onError: (ctx) => {
        // display error message
        alert(ctx.error.message);
    }
 });
    return { data, error };
}
