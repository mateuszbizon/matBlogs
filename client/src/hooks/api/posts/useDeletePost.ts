import { deletePost } from "@/api/posts"
import { MESSAGES } from "@/constants/messages"
import { usePopupMessage } from "@/context/PopupMessageContext"
import { useUserAuth } from "@/context/UserAuthContext"
import { TMainResponse } from "@/types/responses"
import { TDeletedPost, TUserPosts } from "@/types/responses/post.response"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { usePathname, useRouter } from "next/navigation"


function useDeletePost() {
    const queryClient = useQueryClient()
    const { userData } = useUserAuth()
    const { showErrorMessage, showSuccessMessage } = usePopupMessage()
    const router = useRouter()
    const pathname = usePathname()
    const { mutate: handleDeletePost, isPending } = useMutation({
        mutationFn: deletePost,
        onSuccess: (data: TMainResponse<TDeletedPost>) => {
            if (pathname.includes("blog-post")) {
                showSuccessMessage(MESSAGES.post.postDeleted)
                router.push(`/user/${userData?.username}`)

                return
            }

            queryClient.setQueryData<TMainResponse<TUserPosts>>(["user-posts"], (oldData) => {
                if (oldData?.data) {
                    return {
                        ...oldData, data: {
                            ...oldData.data, posts: oldData.data.posts.filter(post => {
                                return post.id !== data.data?.post.id
                            })
                        }
                    } 
                }

                return oldData
            })
        },
        onError: () => {
            showErrorMessage(MESSAGES.post.postNotDeleted)
        }
    })

  return {
    handleDeletePost,
    isPending,
  }
}

export default useDeletePost