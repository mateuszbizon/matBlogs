export type TUser = {
    id: string;
    username: string;
    name: string;
    profile?: TProfile | null;
    posts?: TPost[];
    postRatings?: TPostRating[];
    comments?: TComment[];
    commentReplies?: TCommentReply[];
}

export type TProfile = {
    id: string;
    photo: string;
    user?: TUser;
    userId: string;
};

export type TPost = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    titlePhoto: string;
    author?: TUser;
    authorId: string;
    slug: string;
    comments?: TComment[];
    postRatings?: TPostRating[];
};

export type TComment = {
    id: string;
    content: string;
    postId: string;
    commentReplies?: TCommentReply[];
    author?: TUser;
    authorId: string;
};

export type TCommentReply = {
    id: string;
    content: string;
    replyingTo: string;
    comment?: TComment;
    commentId: string;
    author?: TUser;
    authorId: string
};  

export type TPostRating = {
    id: string;
    value: number;
    post?: TPost;
    postId: string;
    user?: TUser;
    userId: string;
};  