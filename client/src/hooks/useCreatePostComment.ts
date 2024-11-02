import { createPostComment } from '@/api/comments'
import { MESSAGES } from '@/constants/messages'
import { usePopupMessage } from '@/context/PopupMessageContext'
import { TMainResponse } from '@/types/responses'
import { TCreatedComment } from '@/types/responses/comment.response'
import { useMutation } from '@tanstack/react-query'

function useCreatePostComment() {
    const { showErrorMessage } = usePopupMessage()
    const { mutate: handleCreatePostComment, isPending: isPendingCreatePostComment } = useMutation({
        mutationFn: createPostComment,
        onSuccess: (data: TMainResponse<TCreatedComment>) => {
            if (data.data) {
                console.log("created")
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