import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { updateCurrentUser } from '../../services/apiAuth.js'

export function useUpdateUser() {
  const queryClient = useQueryClient()
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success('User account successfully updated')
      queryClient.setQueryData('user', user)
    },
    onError: (error) => {
      toast.error(error.message)
      console.log(error)
    },
  })
  return { updateUser, isUpdating }
}
