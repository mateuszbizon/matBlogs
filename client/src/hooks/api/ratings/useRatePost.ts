import { ratePost } from "@/api/ratings"
import { MESSAGES } from "@/constants/messages"
import { usePopupMessage } from "@/context/PopupMessageContext"
import { useMutation } from "@tanstack/react-query"


function useRatePost() {
    const { showSuccessMessage, showErrorMessage } = usePopupMessage()
    const { mutate: handleRatePost, isPending, isError } = useMutation({
        mutationFn: ratePost,
        onSuccess: () => {
            showSuccessMessage(MESSAGES.rating.postRated)
        },
        onError: () => {
            showErrorMessage(MESSAGES.rating.postNotRated)
        }
    })

  return {
    handleRatePost,
    isPending,
    isError
  }
}

export default useRatePost