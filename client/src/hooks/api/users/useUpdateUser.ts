import { updateUser } from '@/api/users'
import { MESSAGES } from '@/constants/messages'
import { usePopupMessage } from '@/context/PopupMessageContext'
import { useUserAuth } from '@/context/UserAuthContext'
import { TMainResponse } from '@/types/responses'
import { TUpdatedUser } from '@/types/responses/user.response'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

function useUpdateUser() {
    const { userData, saveUser } = useUserAuth()
    const { showErrorMessage, showSuccessMessage } = usePopupMessage()
    const { mutate: handleUpdateUser, isPending } = useMutation({
        mutationFn: updateUser,
        onSuccess: (data: TMainResponse<TUpdatedUser>) => {
            if (userData && data.data) {
                saveUser({ ...userData, name: data.data.name, username: data.data.username })
                showSuccessMessage(MESSAGES.user.userUpdated)
            }
        },
        onError: (error: AxiosError) => {
            if (error.response?.status == 400) {
                showErrorMessage(MESSAGES.user.usernameTaken)
                return
            }

            showErrorMessage(MESSAGES.user.userNotUpdated)
        }
    })

  return {
    handleUpdateUser,
    isPending
  }
}

export default useUpdateUser