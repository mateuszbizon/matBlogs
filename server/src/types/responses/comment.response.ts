import { TComment, TCommentReply } from "../models"

export type TCommentReponse = {
    comment: TComment
}

export type TCommentReplyResponse = {
    commentReply: TCommentReply
}

export type TGetPostCommentsResponse = {
    comments: TComment[]
}