import { updateUserProfile } from "@/api/users"
import { MESSAGES } from "@/constants/messages"
import { usePopupMessage } from "@/context/PopupMessageContext"
import { useUserAuth } from "@/context/UserAuthContext"
import { TMainResponse } from "@/types/responses"
import { TUpdatedUserProfile } from "@/types/responses/user.response"
import { useMutation } from "@tanstack/react-query"

function useUpdateUserProfile() {
    const { saveUser, userData } = useUserAuth()
    const { showSuccessMessage, showErrorMessage } = usePopupMessage()
    const { mutate: handleUpdateUserProfile, isPending } = useMutation({
        mutationFn: updateUserProfile,
        onSuccess: (data: TMainResponse<TUpdatedUserProfile>) => {
            if (userData) {
                showSuccessMessage(MESSAGES.user.userProfileUpdated)
                saveUser({ ...userData, userPhoto: data.data?.profile.photo })
            }
        },
        onError: () => {
            showErrorMessage(MESSAGES.user.userProfileNotUpdated)
        }
    })

  return {
    handleUpdateUserProfile,
    isPending,
  }
}

export default useUpdateUserProfile