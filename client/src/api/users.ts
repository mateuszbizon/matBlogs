import { TSignUpSchema } from "@/validations/signUpSchema";
import { API } from ".";
import { TSignInSchema } from "@/validations/signInSchema";
import { TUpdateUserSchema } from "@/validations/updateUserSchema";

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

export async function updateUserProfile(formData: FormData) {
	const { data } = await API.put(`/users/update-user-profile`, formData)

	return data
}

export async function updateUser(user: TUpdateUserSchema) {
	const { data } = await API.patch(`/users/update-user`, user)

	return data
}