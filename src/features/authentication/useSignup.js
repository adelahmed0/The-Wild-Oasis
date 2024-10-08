import { useMutation } from '@tanstack/react-query'
import { signup as signupApi } from '../../services/apiAuth.js'
import toast from 'react-hot-toast'

export function useSignup() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user)
      toast.success(
        'Account created successfully. Please check your email to verify your account.'
      )
    },
  })

  return { signup, isLoading }
}
