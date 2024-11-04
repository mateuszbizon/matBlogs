import { TCommentModel, TCommentReplyModel } from "../models"

export type TPostComments = {
    comments: TCommentModel[];
}

export type TCreatedComment = {
    comment: TCommentModel;
}

export type TDeletedComment = {
    comment: {
        id: TCommentModel["id"]
    }
}

export type TCreatedCommentReply = {
    commentReply: TCommentReplyModel;
}