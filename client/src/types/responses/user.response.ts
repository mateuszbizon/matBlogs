import { TUser } from "../models"

export type TSignUpResponse = {
    user: {
        id: TUser["id"];
        name: TUser["name"];
        username: TUser["username"];
    }
}

export type TSignInResponse = {
    token: string;
    user: {
        id: TUser["id"];
        name: TUser["name"];
        username: TUser["username"];
    }
}

export type TGetSingleUserResponse = {
    user: {
        id: TUser["id"];
        name: TUser["name"];
        username: TUser["username"];
        profile: TUser["profile"]
    }
    postsAmount: number;
}