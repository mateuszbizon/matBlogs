import { signUpUser } from '@/api/users'
import { TMainResponse } from '@/types/responses'
import { TSignUpResponse } from '@/types/responses/user.response'
import { useMutation } from '@tanstack/react-query'

function useSignUp() {
    const { mutate: handleSignUp, isPending: isPendingSignUp } = useMutation({
        mutationFn: signUpUser,
        onSuccess: (data: TMainResponse<TSignUpResponse>) => {
            console.log(data)
        },
        onError: (error: any) => {
            const errorData = error.response.data
            console.log(errorData)
        }
    })

  return {
    handleSignUp,
    isPendingSignUp
  }
}

export default useSignUp