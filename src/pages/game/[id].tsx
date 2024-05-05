import { useRouter } from "next/router";

export default function GamePage() {
    const { query } = useRouter();
    return (
        <>
            <h1>Game Page</h1>
            <p>
            {query.id}
            </p>
        </>   
    )
}