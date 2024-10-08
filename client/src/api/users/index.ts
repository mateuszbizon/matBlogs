import { TSignUpSchema } from "@/validations/signUpSchema";
import { API } from "..";


export async function signUpUser(data: TSignUpSchema) {
    return await API.post("/users/sign-up", data)
}