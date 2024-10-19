import { TUser } from "../models"

export type TSignUpResponse = {
    user: {
        id: Pick<TUser, "id">;
        name: Pick<TUser, "name">
        username: Pick<TUser, "username">
    }
}

export type TSignInResponse = {
    token: string;
    user: {
        id: Pick<TUser, "id">;
        name: Pick<TUser, "name">
        username: Pick<TUser, "username">
    }
}