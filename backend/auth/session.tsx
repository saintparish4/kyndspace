import { authClient } from "@/lib/auth-client";

export function Session() {
    const {
        data: session,
        isPending, // loading state
        error // error object
    } = authClient.useSession();

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Session</h1>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    );
}