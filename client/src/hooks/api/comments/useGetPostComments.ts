import { getPostComments } from "@/api/comments"
import { TMainResponse } from "@/types/responses";
import { TPostComments } from "@/types/responses/comment.response";
import { useQuery } from "@tanstack/react-query"

type Props = {
    postId: string;
}

function useGetPostComments({ postId }: Props) {
    const { data: postCommentsData, isLoading: isLoadingPostComments } = useQuery<TMainResponse<TPostComments>>({
        queryKey: ["get-post-comments"],
        queryFn: () => getPostComments(postId),
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

  return {
    postCommentsData,
    isLoadingPostComments,
  }
}

export default useGetPostComments