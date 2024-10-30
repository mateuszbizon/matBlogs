export type TUserModel = {
    id: string;
    username: string;
    name: string;
    profile?: TProfileModel | null;
    posts?: TPostModel[];
    postRatings?: TPostRatingModel[];
    comments?: TCommentModel[];
    commentReplies?: TCommentReplyModel[];
}

export type TProfileModel = {
    id: string;
    photo: string;
    user?: TUserModel;
    userId: string;
};

export type TPostModel = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    titlePhoto: string;
    author?: TUserModel;
    authorId: string;
    slug: string;
    comments?: TCommentModel[];
    postRatings?: TPostRatingModel[];
};

export type TCommentModel = {
    id: string;
    content: string;
    postId: string;
    commentReplies?: TCommentReplyModel[];
    author?: TUserModel;
    authorId: string;
};

export type TCommentReplyModel = {
    id: string;
    content: string;
    replyingTo: string;
    comment?: TCommentModel;
    commentId: string;
    author?: TUserModel;
    authorId: string
};  

export type TPostRatingModel = {
    id: string;
    value: number;
    post?: TPostModel;
    postId: string;
    user?: TUserModel;
    userId: string;
};  