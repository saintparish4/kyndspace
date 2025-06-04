import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function SignOut() {
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                },
            },
        });
    };

    return (
        // Add your component JSX here
        <div>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}