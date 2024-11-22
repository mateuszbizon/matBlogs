import { API } from ".";

export async function getSignedInUserData() {
    const { data } = await API.get("/auth/get-signed-in-user-data")

    return data
}

export async function signOut() {
    const { data } = await API.get("/auth/sign-out")

    return data
}