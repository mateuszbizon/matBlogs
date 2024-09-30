import { TPost } from "../models"

export type TCreatePostResponse = {
    post: TPost
}

export type TUpdatePostResponse = {
    post: TPost
}

export type TDeletePostResponse = {
    post: TPost
}

export type TGetSinglePostResponse = {
    post: TPost
    commentsAmount: number
}