import Heading from '../ui/Heading'
import Row from '../ui/Row'
import { useTranslation } from 'react-i18next'
import BookingTable from '../features/bookings/BookingTable.jsx'
import BookingTableOperations from '../features/bookings/BookingTableOperations.jsx'

function Bookings() {
  const { t } = useTranslation()
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{t('bookings.allBookings')}</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  )
}

export default Bookings
