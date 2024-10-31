import { API } from ".";

export async function getPostComments(postId: string) {
    const { data } = await API.get(`/comments/get-post-comments/${postId}`)

    return data
}