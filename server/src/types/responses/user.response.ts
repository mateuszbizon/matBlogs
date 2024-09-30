import { TProfile, TUser } from "../models";

export type TSignInResponse = {
    token: string;
    user: TUser;
}

export type TSignUpResponse = {
    user: TUser
}

export type TUpdateUserResponse = {
    user: TUser
}

export type TUpdateUserProfileResponse = {
    profile: TProfile
}

export type TGetSingleUserResponse = {
    user: TUser
    postsAmount: number
}