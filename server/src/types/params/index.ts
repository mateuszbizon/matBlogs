type TParams<T extends string[]> = {
    [key in T[number]]: string;
}

export type TUpdatePostParams = TParams<["postId"]>

export type TDeletePostParams = TParams<["postId"]>

export type TGetSinglePostParams = TParams<["slug"]>

export type TUpdateUserParams = TParams<["userId"]>

export type TUpdateUserProfileParams = TParams<["userId"]>

export type TGetCompleteUserParams = TParams<["username"]>

export type TCreateCommentParams = TParams<["postId"]>

export type TDeleteCommentParams = TParams<["commentId"]>

export type TCreateCommentReplyParams = TParams<["commentId", "username"]>

export type TDeleteCommentReplyParams = TParams<["commentReplyId"]>

export type TRatePostParams = TParams<["postId"]>

export type TGetUserPostsParams = TParams<["userId"]>