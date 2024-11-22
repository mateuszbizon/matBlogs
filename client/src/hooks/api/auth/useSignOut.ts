import { signOut } from '@/api/auth'
import { MESSAGES } from '@/constants/messages'
import { usePopupMessage } from '@/context/PopupMessageContext'
import { useUserAuth } from '@/context/UserAuthContext'
import { useMutation } from '@tanstack/react-query'

function useSignOut() {
    const { saveUser } = useUserAuth()
    const { showErrorMessage, showSuccessMessage } = usePopupMessage()
    const { mutate: handleSignOut, isPending } = useMutation({
        mutationFn: signOut,
        onSuccess: () => {
            showSuccessMessage(MESSAGES.user.userSignedOut)
            saveUser(null)
        },
        onError: () => {
            showErrorMessage(MESSAGES.user.userNotSignedOut)
        }
    })

  return {
    handleSignOut,
    isPending
  }
}

export default useSignOut