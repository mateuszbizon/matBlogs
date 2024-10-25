import { getUserPosts } from "@/api/posts"
import { TMainResponse } from "@/types/responses";
import { TUserPosts } from "@/types/responses/post.response";
import { useQuery } from "@tanstack/react-query"

type UseGetUserPostsProps = {
    userId: string;
    page: number;
    sort?: string;
}

function useGetUserPosts({ userId, page, sort }: UseGetUserPostsProps) {
    const { data: userPosts, isLoading: isLoadingUserPosts } = useQuery<TMainResponse<TUserPosts>>({
        queryKey: ["user-posts", sort],
        queryFn: () => getUserPosts(userId, page, sort),
    })

  return {
    userPosts,
    isLoadingUserPosts
  }
}

export default useGetUserPosts