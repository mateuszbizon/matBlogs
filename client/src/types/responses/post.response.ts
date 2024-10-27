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