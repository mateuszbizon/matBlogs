import { API } from ".";

export async function ratePost({ postId, value }: { postId: string, value: number | null }) {
    const { data } = await API.put(`/ratings/rate-post/${postId}`, { value })

    return data
}