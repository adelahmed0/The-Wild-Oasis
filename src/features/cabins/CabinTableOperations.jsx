import TableOperations from '../../ui/TableOperations.jsx'
import Filter from '../../ui/Filter.jsx'
import { useTranslation } from 'react-i18next'
import SortBy from '../../ui/SortBy.jsx'

const CabinTableOperations = () => {
  const { t } = useTranslation()
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: t('cabins.all') },
          { value: 'no-discount', label: t('cabins.noDiscount') },
          { value: 'with-discount', label: t('cabins.withDiscount') },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: t('cabins.sortByName_asc') },
          { value: 'name-desc', label: t('cabins.sortByName_desc') },
          { value: 'regularPrice-asc', label: t('cabins.sortByPrice_asc') },
          { value: 'regularPrice-desc', label: t('cabins.sortByPrice_desc') },
          { value: 'maxCapacity-asc', label: t('cabins.sortByCapacity_asc') },
          { value: 'maxCapacity-desc', label: t('cabins.sortByCapacity_desc') },
        ]}
      />
    </TableOperations>
  )
}

export default CabinTableOperations
