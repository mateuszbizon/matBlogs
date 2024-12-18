import { createPost } from '@/api/posts'
import { MESSAGES } from '@/constants/messages'
import { usePopupMessage } from '@/context/PopupMessageContext'
import { TMainResponse } from '@/types/responses'
import { TCreatedPost } from '@/types/responses/post.response'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

function useCreatePost() {
    const router = useRouter()
    const { showSuccessMessage, showErrorMessage } = usePopupMessage()
    const { mutate: handleCreatePost, isPending: isPendingCreatePost } = useMutation({
        mutationFn: createPost,
        onSuccess: (data: TMainResponse<TCreatedPost>) => {
            if (data.data) {
                showSuccessMessage(MESSAGES.post.postCreated)
                router.push(`/blog-post/${data.data.post.slug}`)
            }
        },
        onError: (error: AxiosError) => {
            if (error.response?.status == 400) {
                showErrorMessage(MESSAGES.post.postAlreadyExists)
                return
            }

            showErrorMessage(MESSAGES.post.postNotCreated)
        }
    })

  return {
    handleCreatePost,
    isPendingCreatePost,
  }
}

export default useCreatePost