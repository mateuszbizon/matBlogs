import { TSignUpSchema } from "@/validations/signUpSchema";
import { API } from ".";
import { TSignInSchema } from "@/validations/signInSchema";

export async function signUpUser(user: TSignUpSchema) {
	const { data } = await API.post("/users/sign-up", user);

	return data;
}

export async function signInUser(user: TSignInSchema) {
	const { data } = await API.post("/users/sign-in", user);

	return data;
}

export async function getSingleUser(username: string) {
	const { data } = await API.get(`/users/get-user/${username}`)

	return data;
}

export async function searchUsers(searchValue: string) {
	const { data } = await API.get(`/users/search-users?search=${searchValue}`)

	return data
}