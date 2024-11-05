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

export async function deletePostComment(commentId: string) {
    const { data } = await API.delete(`/comments/delete-comment/${commentId}`)

    return data
}

type CreatePostCommentReplyProps = {
    commentId: string;
    replyingUsername: string;
    content: TCommentSchema;
}

export async function createPostCommentReply({ commentId, replyingUsername, content }: CreatePostCommentReplyProps) {
    const { data } = await API.post(`/comments/create-comment-reply/${commentId}/${replyingUsername}`, content)

    return data
}

export async function deletePostCommentReply(replyId: string) {
    const { data } = await API.delete(`/comments/delete-comment-reply/${replyId}`)

    return data
}