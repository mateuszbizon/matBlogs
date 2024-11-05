import { deletePostCommentReply } from "@/api/comments"
import { MESSAGES } from "@/constants/messages"
import { usePopupMessage } from "@/context/PopupMessageContext"
import { TMainResponse } from "@/types/responses"
import { TDeletedCommentReply, TPostComments } from "@/types/responses/comment.response"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function useDeletePostReply() {
    const { showErrorMessage } = usePopupMessage()
    const queryClient = useQueryClient()
    const { mutate: handleDeletePostCommentReply, isPending: isPendingDeletePostCommentReply } = useMutation({
        mutationFn: deletePostCommentReply,
        onSuccess: (data: TMainResponse<TDeletedCommentReply>) => {
            if (data.data) {
                queryClient.setQueryData<TMainResponse<TPostComments>>(["get-post-comments"], (oldData) => {
                    if (oldData?.data) {
                        return { 
                            ...oldData, data: {
                                ...oldData.data, comments: oldData.data.comments.map(comment => {
                                    if (comment.id === data.data?.commentReply.commentId) {
                                        return {
                                            ...comment, commentReplies: comment.commentReplies?.filter(reply => {
                                                return reply.id !== data.data?.commentReply.id
                                            })
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
            showErrorMessage(MESSAGES.comment.commentPostReplyNotDeleted)
        }
    })

  return {
    handleDeletePostCommentReply,
    isPendingDeletePostCommentReply,
  }
}

export default useDeletePostReply