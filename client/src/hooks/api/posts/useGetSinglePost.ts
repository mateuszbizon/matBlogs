import { getSinglePost } from '@/api/posts'
import { TMainResponse } from '@/types/responses';
import { TPost } from '@/types/responses/post.response';
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios';

type UseGetSinglePostProps = {
    slug: string;
}

function useGetSinglePost({ slug }: UseGetSinglePostProps) {
    const { data: singlePost, isLoading: isSinglePostLoading, isError: isSinglePostError, error } = useQuery<TMainResponse<TPost>, AxiosError>({
        queryKey: ['single-post'],
        queryFn: () => getSinglePost(slug),
        retry: false,
    })

  return {
    singlePost,
    isSinglePostLoading,
    isSinglePostError,
    error,
  }
}

export default useGetSinglePost