import { TCommentModel } from "../models"

export type TPostComments = {
    comments: TCommentModel[];
}

export type TCreatedComment = {
    comment: TCommentModel;
}