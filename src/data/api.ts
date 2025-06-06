import { env } from "@/env";

export default async function api(path: string, config? : RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL,
        fullUrl = `/api${path}`,
        url = new URL(fullUrl, baseUrl)


    const res = await fetch(url, config)

    return res
}
