import { signUpUser } from '@/api/users'
import { MESSAGES } from '@/constants/messages'
import { usePopupMessage } from '@/context/PopupMessageContext'
import { TMainResponse } from '@/types/responses'
import { TSignUpResponse } from '@/types/responses/user.response'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

function useSignUp() {
    const router = useRouter()
    const { showSuccessMessage, showErrorMessage } = usePopupMessage()
    const { mutate: handleSignUp, isPending: isPendingSignUp } = useMutation({
        mutationFn: signUpUser,
        onSuccess: (data: TMainResponse<TSignUpResponse>) => {
            router.push("/sign-in")
            showSuccessMessage(MESSAGES.user.userCreated)
        },
        onError: (error: AxiosError<TMainResponse>) => {
            if (error.response?.status == 400) {
              showErrorMessage(MESSAGES.user.usernameTaken)
              return
            }

            showErrorMessage(MESSAGES.user.userNotCreated)
        }
    })

  return {
    handleSignUp,
    isPendingSignUp
  }
}

export default useSignUp