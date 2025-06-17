import { authClient } from "./auth-client";

export async function signIn(email: string, password: string) {
  const { data, error } = await authClient.signIn.email(
    {
      email,
      password,
      callbackURL: "/",
      rememberMe: false,
    },
    {
      onRequest: (context) => {
        console.log("onRequest", context);
      },
      onSuccess: (context) => {
        console.log("onSuccess", context);
      },
    }
  );

  return { data, error };
}

await authClient.signIn.social({
  provider: "google",
  callbackURL: "/",
  errorCallbackURL: "/",
  newUserCallbackURL: "/welcome",
  disableRedirect: false,
});
