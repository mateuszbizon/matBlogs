import { TCommentSchema } from "@/validations/commentSchema";
import { API } from ".";

export async function getPostComments(postId: string) {
    const { data } = await API.get(`/comments/get-post-comments/${postId}`)

    return data
}

export async function createPostComment({ postId, commentData }: { postId: string, commentData: TCommentSchema }) {
    const { data } = await API.post(`/comments/create-comment/${postId}`, commentData)
    
    return data
}