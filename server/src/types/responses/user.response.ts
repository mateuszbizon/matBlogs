import { TProfile, TUser } from "../models";

export type TUserResponse = {
    user: TUser
}

export type TProfileResponse = {
    profile: TProfile
}

export type TSignInResponse = {
    token: string;
    user: TUser;
}

export type TGetSingleUserResponse = {
    user: TUser
    postsAmount: number
}