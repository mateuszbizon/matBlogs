import { getSingleUser } from "@/api/users";
import { MESSAGES } from "@/constants/messages";
import { TMainResponse } from "@/types/responses";
import { TUserProfile } from "@/types/responses/user.response";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type UseGetSingleUserProps = {
	username: string;
};

let errorMessage: string

function useGetSingleUser({ username }: UseGetSingleUserProps) {
	const {
		data: userProfile,
		isError: isErrorUserProfile,
		isLoading: isLoadingUserProfile,
		error
	} = useQuery<TMainResponse<TUserProfile>, AxiosError>({
		queryKey: ["single-user"],
		queryFn: () => getSingleUser(username),
		retry: false,
	});

	if (isErrorUserProfile) {
		if (error.response?.status == 404) {
			errorMessage = MESSAGES.user.userNotFound
		}
	}

	return {
		userProfile,
		isLoadingUserProfile,
		isErrorUserProfile,
		errorMessage
	};
}

export default useGetSingleUser;
