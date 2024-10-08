import { signUpUser } from '@/api/users'
import { TSignUpSchema } from '@/validations/signUpSchema'
import { useMutation } from '@tanstack/react-query'

type UseSignUpProps = {
    data: TSignUpSchema
}

function useSignUp() {
    const { mutate: handleSignUp, isPending: isPendingSignUp } = useMutation({
        mutationFn: signUpUser
    })

  return {
    handleSignUp,
    isPendingSignUp
  }
}

export default useSignUp