import { signInUser } from "@/api/users"
import { MESSAGES } from "@/constants/messages"
import { usePopupMessage } from "@/context/PopupMessageContext"
import { TMainResponse } from "@/types/responses"
import { TSignInResponse } from "@/types/responses/user.response"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"


function useSignIn() {
    const router = useRouter()
    const { showErrorMessage } = usePopupMessage()
    const { mutate: handleSignIn, isPending: isPendingSignIn } = useMutation({
        mutationFn: signInUser,
        onSuccess: (data: TMainResponse<TSignInResponse>) => {
            router.push("/")
        },
        onError: (error: AxiosError) => {
            if (error.response?.status == 400) {
                showErrorMessage(MESSAGES.user.userCredentialsIncorrect)
                return
            }

            showErrorMessage(MESSAGES.user.userCantSignIn)
        }
    })

  return {
    handleSignIn,
    isPendingSignIn
  }
}

export default useSignIn