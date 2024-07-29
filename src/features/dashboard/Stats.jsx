import Stat from './Stat.jsx'
import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi'
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helpers.js'
import { useTranslation } from 'react-i18next'

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  // 1.
  const numBookings = bookings.length

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)

  // 3.
  const checkIns = confirmedStays.length

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount)

  const { t } = useTranslation()

  return (
    <>
      <Stat
        title={t('dashboard.bookings')}
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title={t('dashboard.sales')}
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title={t('dashboard.checkIns')}
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title={t('dashboard.occupancyRate')}
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + '%'}
      />
    </>
  )
}

export default Stats
