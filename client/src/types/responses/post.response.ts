import { TPostModel } from "../models"

export type TUserPosts = {
    posts: TUserPost[]
}

export type TUserPost = {
    id: TPostModel["id"];
    title: TPostModel["title"]
    titlePhoto: TPostModel["titlePhoto"]
    slug: TPostModel["slug"]
    authorId: TPostModel["authorId"]
}

export type TCreatedPost = {
    post: {
        slug: TPostModel["slug"]
    }
}

export type TPost = {
    post: TPostModel;
    commentsAmount: number;
}

export type TDeletedPost = {
    post: {
        id: TPostModel["id"]
    }
}

export type TSearchedPost = {
    id: TPostModel["id"];
    title: TPostModel["title"];
    slug: TPostModel['slug'];
}

export type TSearchedPosts = {
    posts: TSearchedPost[];
}