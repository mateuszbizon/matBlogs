import { TProfile, TUser } from "../models";

export type TUserResponse = {
    user: TUser
}

export type TProfileResponse = {
    profile: TProfile
}

export type TSignInResponse = {
    id: TUser["id"];
    username: TUser["username"];
    name: TUser["name"];
}

export type TGetSingleUserResponse = {
    user: TUser
    postsAmount: number
}

export type TSearchUsersResponse = {
    users: TUser[]
    usersLength: number
}