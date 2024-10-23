import { TUser } from "../models"

export type TSignUpResponse = {
    user: {
        id: TUser["id"];
        name: TUser["name"];
        username: TUser["username"];
    }
}

export type TSignInResponse = {
    id: TUser["id"];
    name: TUser["name"];
    username: TUser["username"];
}

export type TUserProfile = {
    user: {
        id: TUser["id"];
        name: TUser["name"];
        username: TUser["username"];
        profile: TUser["profile"]
    }
    postsAmount: number;
}