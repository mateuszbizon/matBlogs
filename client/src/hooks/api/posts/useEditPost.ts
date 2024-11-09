import { editPost } from "@/api/posts"
import { MESSAGES } from "@/constants/messages"
import { usePopupMessage } from "@/context/PopupMessageContext"
import { TMainResponse } from "@/types/responses"
import { TCreatedPost } from "@/types/responses/post.response"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"


function useEditPost() {
    const router = useRouter()
    const { showErrorMessage, showSuccessMessage } = usePopupMessage()
    const { mutate: handleEditPost, isPending: isPendingEditPost } = useMutation({
        mutationFn: editPost,
        onSuccess: (data: TMainResponse<TCreatedPost>) => {
            router.push(`/blog-post/${data.data?.post.slug}`)
            showSuccessMessage(MESSAGES.post.postUpdated)
        },
        onError: (error: AxiosError) => {
            if (error.response?.status == 400) {
                showErrorMessage(MESSAGES.post.postAlreadyExists)
                return
            }

            showErrorMessage(MESSAGES.post.postNotUpdated)
        }
    })

  return {
    handleEditPost,
    isPendingEditPost,
  }
}

export default useEditPost