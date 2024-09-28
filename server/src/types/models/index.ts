export type TUser = {
    id: string;
    username: string;
    name: string;
    profile?: TProfile | null;
    posts?: TPost[];
    postRatings?: TPostRating[];
}

export type TProfile = {
    id: string;
    photo: string;
    userId: string;
};

export type TPost = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    titlePhoto: string;
    authorId: string;
    comments?: TComment[];
    postRatings?: TPostRating[];
};

export type TComment = {
    id: string;
    content: string;
    postId: string;
    commentReplies?: TCommentReply[];
};

export type TCommentReply = {
    id: string;
    content: string;
    replyingTo: string;
    commentId: string;
};  

export type TPostRating = {
    id: string;
    value: number;
    postId: string;
    userId: string;
};  