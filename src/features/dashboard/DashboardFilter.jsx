import Filter from '../../ui/Filter.jsx'
import { useTranslation } from 'react-i18next'

function DashboardFilter() {
  const { t } = useTranslation()
  return (
    <Filter
      filterField="last"
      options={[
        { value: '7', label: t('dashboard.dashboardFilter.last7Days') },
        { value: '30', label: t('dashboard.dashboardFilter.last30Days') },
        { value: '90', label: t('dashboard.dashboardFilter.last90Days') },
      ]}
    />
  )
}

export default DashboardFilter
