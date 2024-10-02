import { TPost } from "../models"

export type TPostReponse = {
    post: TPost
}

export type TGetSinglePostResponse = {
    post: TPost
    commentsAmount: number
}

export type TSearchPostsResponse = {
    posts: TPost[]
}

export type TGetUserPostsResponse = {
    posts: TPost[]
}