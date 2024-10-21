import { getSingleUser } from "@/api/users";
import { MESSAGES } from "@/constants/messages";
import { TMainResponse } from "@/types/responses";
import { TGetSingleUserResponse } from "@/types/responses/user.response";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type UseGetSingleUserProps = {
	username: string;
};

let errorMessage: string

function useGetSingleUser({ username }: UseGetSingleUserProps) {
	const {
		data: singleUserData,
		isError: isErrorSingleUser,
		isLoading: isLoadingSingleUser,
		error
	} = useQuery<TMainResponse<TGetSingleUserResponse>, AxiosError>({
		queryKey: ["single-user"],
		queryFn: () => getSingleUser(username),
		retry: false,
	});

	if (isErrorSingleUser) {
		if (error.response?.status == 404) {
			errorMessage = MESSAGES.user.userNotFound
		}
	}

	return {
		singleUserData,
		isLoadingSingleUser,
		isErrorSingleUser,
		errorMessage
	};
}

export default useGetSingleUser;
