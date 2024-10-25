import { API } from ".";

export async function getUserPosts(userId: string, page: number, sort?: string) {
    const { data } = await API.get(`/posts/get-user-posts/${userId}?page=${page}&sort=${sort}`)

    return data
}