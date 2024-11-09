import { createPostCommentReply } from "@/api/comments"
import { MESSAGES } from "@/constants/messages"
import { usePopupMessage } from "@/context/PopupMessageContext"
import { TMainResponse } from "@/types/responses"
import { TCreatedCommentReply, TPostComments } from "@/types/responses/comment.response"
import { useMutation, useQueryClient } from "@tanstack/react-query"


function useCreatePostReply() {
    const { showErrorMessage } = usePopupMessage()
    const queryClient = useQueryClient()
    const { mutate: handleCreatePostCommentReply, isPending: isPendingCreatePostCommentReply, isError } = useMutation({
        mutationFn: createPostCommentReply,
        onSuccess: (data: TMainResponse<TCreatedCommentReply>) => {
            if (data.data) {
                queryClient.setQueryData<TMainResponse<TPostComments>>(["get-post-comments"], (oldData) => {
                    if (oldData?.data) {
                        return {
                            ...oldData, data: {
                                ...oldData.data, comments: oldData.data.comments.map(comment => {
                                    if (comment.id === data.data?.commentReply.commentId) {
                                        return {
                                            ...comment, commentReplies: [data.data.commentReply, ...(comment.commentReplies || [])]
                                        }
                                    }

                                    return comment
                                })
                            }
                         }
                    }

                    return oldData
                })
            }
        },
        onError: () => {
            showErrorMessage(MESSAGES.comment.commentPostReplyNotCreated)
        }
    })

  return {
    handleCreatePostCommentReply,
    isPendingCreatePostCommentReply,
    isError
  }
}

export default useCreatePostReply