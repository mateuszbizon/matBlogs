import { createPostComment } from '@/api/comments'
import { MESSAGES } from '@/constants/messages'
import { usePopupMessage } from '@/context/PopupMessageContext'
import { TMainResponse } from '@/types/responses'
import { TCreatedComment, TPostComments } from '@/types/responses/comment.response'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function useCreatePostComment() {
    const queryClient = useQueryClient()
    const { showErrorMessage } = usePopupMessage()
    const { mutate: handleCreatePostComment, isPending: isPendingCreatePostComment } = useMutation({
        mutationFn: createPostComment,
        onSuccess: (data: TMainResponse<TCreatedComment>) => {
            if (data.data) {
                queryClient.setQueryData<TMainResponse<TPostComments>>(
                    ["get-post-comments"],
                    (oldData) => {
                      if (oldData) {
                        return {
                          ...oldData,
                          data: {
                            ...oldData.data, comments: [data.data?.comment!, ...oldData.data?.comments!],
                          },
                        };
                      }
                      
                      return oldData;
                    }
                  );
            }
        },
        onError: () => {
            showErrorMessage(MESSAGES.comment.commentPostNotCreated)
        }
    })

  return {
    handleCreatePostComment,
    isPendingCreatePostComment,
  }
}

export default useCreatePostComment