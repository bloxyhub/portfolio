import type { LanyardResponse, Snowflake } from "use-lanyard";

export async function getLanyard(id: Snowflake) {
    const lanyard = await fetch(`https://api.lanyard.rest/v1/users/${id}`).then(
        res => res.json() as Promise<LanyardResponse>,
    );

    if (!lanyard.success) {
        throw new Error("Failed to fetch lanyard user data");
    };

    return lanyard.data;
}