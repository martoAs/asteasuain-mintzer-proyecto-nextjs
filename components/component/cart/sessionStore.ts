import "server-only";
import {cookies} from "next/headers";
import {kv} from "@vercel/kv";
import {Item} from "@/app/data/data";


type SessionId = string;

export function getSessionId(): SessionId | undefined {
    const cookieStore = cookies();
    return cookieStore.get("session-id")?.value;
}

function setSessionId(sessionId: SessionId): void {
    const cookieStore = cookies();
    cookieStore.set("session-id", sessionId);
}

export function getSessionIdAndCreateIfMissing() {
    const sessionId = getSessionId();
    if (!sessionId) {
        const newSessionId = crypto.randomUUID();
        setSessionId(newSessionId);

        return newSessionId;
    }

    return sessionId;
}
//-------------------------------------------------------------------------------

export async function get(key: string, namespace: string = ""): Promise<Item[] | null> {
    const sessionId = getSessionId();
    if (!sessionId) {
        return null;
    }
    return await kv.hget(`session-${namespace}-${sessionId}`, key);
}

export async function getCartFromSession(sessionID: string, key: string,namespace: string = ""): Promise<Item[] | null> {
    return await kv.hget(`session-${namespace}-${sessionID}`, key);
}
export async function setCartFromSession(sessionID: string, key: string, value: Item[],namespace: string = "") {
    return await kv.hset(`session-${namespace}-${sessionID}`, { [key]: value });
}

export function getAll(namespace: string = "") {
    const sessionId = getSessionId();
    if (!sessionId) {
        return null;
    }
    return kv.hgetall(`session-${namespace}-${sessionId}`);
}

export function set(key: string, value: Item[], namespace: string = "") {
    const sessionId = getSessionIdAndCreateIfMissing();
    return kv.hset(`session-${namespace}-${sessionId}`, { [key]: value });
}