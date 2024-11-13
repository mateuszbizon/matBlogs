import { searchPosts } from "@/api/posts"
import { TMainResponse } from "@/types/responses"
import { TSearchedPosts } from "@/types/responses/post.response"
import { useMutation } from "@tanstack/react-query"

function useSearchPosts() {
    const { mutate: handleSearchPosts, data: searchedPostsData, isPending } = useMutation<TMainResponse<TSearchedPosts>, Error, string>({
        mutationFn: (searchValue: string) => searchPosts(searchValue)
    })

  return {
    handleSearchPosts,
    searchedPostsData,
    isPending,
  }
}

export default useSearchPosts