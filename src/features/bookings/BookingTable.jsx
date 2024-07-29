import BookingRow from './BookingRow'
import Table from '../../ui/Table'
import Menus from '../../ui/Menus'
import Empty from '../../ui/Empty.jsx'
import { useBookings } from './useBookings.js'
import Spinner from '../../ui/Spinner.jsx'
import { useTranslation } from 'react-i18next'
import Pagination from '../../ui/Pagination.jsx'

function BookingTable() {
  const { t } = useTranslation()
  const { isLoading, bookings, count } = useBookings()

  if (isLoading) return <Spinner />
  if (!bookings.length) return <Empty resourceName="bookings" />

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>{t('bookings.cabinBooking')}</div>
          <div>{t('bookings.guestBooking')}</div>
          <div>{t('bookings.datesBooking')}</div>
          <div>{t('bookings.statusBooking')}</div>
          <div>{t('bookings.amountBooking')}</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  )
}

export default BookingTable
