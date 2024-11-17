import { getSingleUser } from "@/api/users";
import { TMainResponse } from "@/types/responses";
import { TUserProfile } from "@/types/responses/user.response";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type UseGetSingleUserProps = {
	username: string;
};

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

	return {
		userProfile,
		isLoadingUserProfile,
		isErrorUserProfile,
		error
	};
}

export default useGetSingleUser;
