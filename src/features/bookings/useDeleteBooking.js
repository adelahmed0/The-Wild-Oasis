import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings.js'
import toast from 'react-hot-toast'

export function useDeleteBooking() {
  const queryClient = useQueryClient()
  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success('Booking deleted')
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      })
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
  return { deleteBooking, isDeleting }
}
