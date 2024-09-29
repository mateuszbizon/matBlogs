import { TPost, TUser } from "../models";

export type TMainResponse<Data = any> = {
    statusCode: number;
    message: string;
    data?: Data;
}

export type TSignInResponse = {
    token: string;
    user: TUser;
}

export type TSignUpResponse = {
    user: TUser
}

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
    post: TPost | null
}

export type TUpdateUserResponse = TSignUpResponse