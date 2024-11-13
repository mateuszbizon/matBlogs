import { searchUsers } from "@/api/users"
import { TMainResponse } from "@/types/responses"
import { TSearchedUsers } from "@/types/responses/user.response"
import { useMutation } from "@tanstack/react-query"

function useSearchUsers() {
    const { mutate: handleSearchUsers, data: searchedUsersData, isPending } = useMutation<TMainResponse<TSearchedUsers>, Error, string>({
        mutationFn: (searchValue: string) => searchUsers(searchValue),
    })

  return {
    handleSearchUsers,
    searchedUsersData,
    isPending,
  }
}

export default useSearchUsers