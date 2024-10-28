import { getSinglePost } from '@/api/posts'
import { MESSAGES } from '@/constants/messages';
import { TMainResponse } from '@/types/responses';
import { TPost } from '@/types/responses/post.response';
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios';

type UseGetSinglePostProps = {
    slug: string;
}

let errorMessage: string

function useGetSinglePost({ slug }: UseGetSinglePostProps) {
    const { data: singlePost, isLoading: isSinglePostLoading, isError: isSinglePostError, error } = useQuery<TMainResponse<TPost>, AxiosError<TMainResponse>>({
        queryKey: ['single-post'],
        queryFn: () => getSinglePost(slug),
        retry: false,
    })

    if (isSinglePostError) {
        if (error.response?.status == 404) {
            errorMessage = MESSAGES.post.postNotFound
        }
    }

  return {
    singlePost,
    errorMessage,
    isSinglePostLoading,
    isSinglePostError,
  }
}

export default useGetSinglePost