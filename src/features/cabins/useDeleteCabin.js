import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins.js'
import toast from 'react-hot-toast'

export function useDeleteCabin() {
  const queryClient = useQueryClient()
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success('Cabin deleted')
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      })
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
  return { deleteCabin, isDeleting }
}
