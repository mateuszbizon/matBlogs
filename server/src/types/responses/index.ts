export type TMainResponse<Data = any> = {
    statusCode: number;
    message: string;
    data?: Data;
}

export type TSignInResponse = {
    token: string;
    user: TUserResponse;
}

export type TUserResponse = {
    id: string;
    username: string;
    name: string;
    profile?: TProfileResponse | null;
    posts?: TPostResponse[];
    postRatings?: TPostRatingResponse[];
}

export type TProfileResponse = {
    id: string;
    photo: string;
    userId: string;
};

export type TPostResponse = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    titlePhoto: string;
    authorId: string;
    comments?: TCommentResponse[];
    postRatings?: TPostRatingResponse[];
};

export type TCommentResponse = {
    id: string;
    content: string;
    postId: string;
    commentReplies?: TCommentReplyResponse[];
};

export type TCommentReplyResponse = {
    id: string;
    content: string;
    replyingTo: string;
    commentId: string;
};  

export type TPostRatingResponse = {
    id: string;
    value: number;
    postId: string;
    userId: string;
};  