import { createPost } from '@/api/posts'
import { MESSAGES } from '@/constants/messages'
import { usePopupMessage } from '@/context/PopupMessageContext'
import { TMainResponse } from '@/types/responses'
import { TCreatedPost } from '@/types/responses/post.response'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

function useCreatePost() {
    const router = useRouter()
    const { showSuccessMessage, showErrorMessage } = usePopupMessage()
    const { mutate: handleCreatePost, isPending: isCreatingPostPending } = useMutation({
        mutationFn: createPost,
        onSuccess: (data: TMainResponse<TCreatedPost>) => {
            if (data.data) {
                showSuccessMessage(MESSAGES.post.postCreated)
                router.push(`/blog-post/${data.data.post.slug}`)
            }
        },
        onError: () => {
            showErrorMessage(MESSAGES.post.postNotCreated)
        }
    })

  return {
    handleCreatePost,
    isCreatingPostPending,
  }
}

export default useCreatePost