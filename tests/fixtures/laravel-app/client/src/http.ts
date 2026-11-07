// The phone app's own request helpers: the base URL (with /api/v1) comes from settings.
const BASE = process.env.EXPO_PUBLIC_API_BASE;

export async function apiGet<T>(path: string): Promise<T> {
    return (await fetch(BASE + path)).json();
}

export async function apiSend<T>(method: 'POST' | 'PATCH' | 'PUT' | 'DELETE', path: string, body?: unknown): Promise<T> {
    return (await fetch(BASE + path, { method, body: JSON.stringify(body) })).json();
}
