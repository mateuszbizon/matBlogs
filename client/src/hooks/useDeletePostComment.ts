import { deletePostComment } from "@/api/comments"
import { MESSAGES } from "@/constants/messages"
import { usePopupMessage } from "@/context/PopupMessageContext"
import { TMainResponse } from "@/types/responses"
import { TDeletedComment, TPostComments } from "@/types/responses/comment.response"
import { useMutation, useQueryClient } from "@tanstack/react-query"


function useDeletePostComment() {
    const queryClient = useQueryClient()
    const { showErrorMessage } = usePopupMessage()
    const { mutate: handleDeletePostComment, isPending: isPendingDeletePostComment } = useMutation({
        mutationFn: deletePostComment,
        onSuccess: (data: TMainResponse<TDeletedComment>) => {
            if (data.data) {
                queryClient.setQueryData<TMainResponse<TPostComments>>(["get-post-comments"], (oldData) => {
                    if (oldData?.data) {
                        return {
                            ...oldData, data: {
                                ...oldData.data, comments: oldData.data.comments.filter(comment => {
                                    return comment.id !== data.data?.comment.id
                                })
                            }
                        }
                    }

                    return oldData
                })
            }
        },
        onError: () => {
            showErrorMessage(MESSAGES.comment.commentPostNotDeleted)
        }
    })

  return {
    handleDeletePostComment,
    isPendingDeletePostComment
  }
}

export default useDeletePostComment