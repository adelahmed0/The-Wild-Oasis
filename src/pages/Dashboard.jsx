import Heading from '../ui/Heading'
import Row from '../ui/Row'
import DashboardLayout from '../features/dashboard/DashboardLayout.jsx'
import DashboardFilter from '../features/dashboard/DashboardFilter.jsx'
import { useTranslation } from 'react-i18next'

function Dashboard() {
  const { t } = useTranslation()

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{t('dashboard.dashboardHeading')}</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  )
}

export default Dashboard
