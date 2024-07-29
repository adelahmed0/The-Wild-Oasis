import SortBy from '../../ui/SortBy'
import Filter from '../../ui/Filter'
import TableOperations from '../../ui/TableOperations'
import { useTranslation } from 'react-i18next'

function BookingTableOperations() {
  const { t } = useTranslation()
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: 'all', label: t('bookings.all') },
          { value: 'checked-out', label: t('bookings.checkedOut') },
          { value: 'checked-in', label: t('bookings.checkedIn') },
          { value: 'unconfirmed', label: t('bookings.unConfirmed') },
        ]}
      />

      <SortBy
        options={[
          { value: 'startDate-desc', label: t('bookings.startDate-desc') },
          { value: 'startDate-asc', label: t('bookings.startDate-asc') },
          {
            value: 'totalPrice-desc',
            label: t('bookings.totalPrice-desc'),
          },
          { value: 'totalPrice-asc', label: t('bookings.totalPrice-asc') },
        ]}
      />
    </TableOperations>
  )
}

export default BookingTableOperations
