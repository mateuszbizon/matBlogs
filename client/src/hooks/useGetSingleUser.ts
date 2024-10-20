import { getSingleUser } from "@/api/users";
import { TMainResponse } from "@/types/responses";
import { TGetSingleUserResponse } from "@/types/responses/user.response";
import { useQuery } from "@tanstack/react-query";

type UseGetSingleUserProps = {
	username: string;
};

function useGetSingleUser({ username }: UseGetSingleUserProps) {
	const {
		data: singleUserData,
		isError: isErrorSingleUser,
		isLoading: isLoadingSingleUser,
	} = useQuery<TMainResponse<TGetSingleUserResponse>>({
		queryKey: ["single-user"],
		queryFn: () => getSingleUser(username),
	});

	return {
		singleUserData,
		isLoadingSingleUser,
		isErrorSingleUser,
	};
}

export default useGetSingleUser;
