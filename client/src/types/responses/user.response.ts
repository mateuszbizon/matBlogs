import { TProfileModel, TUserModel } from "../models"

export type TSignUpResponse = {
    user: {
        id: TUserModel["id"];
        name: TUserModel["name"];
        username: TUserModel["username"];
    }
}

export type TSignInResponse = {
    id: TUserModel["id"];
    name: TUserModel["name"];
    username: TUserModel["username"];
    userPhoto?: TProfileModel["photo"]
}

export type TUserProfile = {
    user: {
        id: TUserModel["id"];
        name: TUserModel["name"];
        username: TUserModel["username"];
        profile: TUserModel["profile"]
    }
    postsAmount: number;
}

export type TSearchedUser = {
    id: TUserModel["id"];
    name: TUserModel["name"];
    username: TUserModel["username"];
    profile: TUserModel["profile"]
}

export type TSearchedUsers = {
    users: TSearchedUser[];
}

export type TUpdatedUserProfile = {
    profile: {
        photo: TProfileModel["photo"]
    }
}

export type TUpdatedUser = {
    name: TUserModel["name"];
    username: TUserModel["username"]
}