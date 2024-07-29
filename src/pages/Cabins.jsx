import Heading from '../ui/Heading'
import Row from '../ui/Row'
import CabinTable from '../features/cabins/CabinTable.jsx'
import { useTranslation } from 'react-i18next'
import AddCabin from '../features/cabins/AddCabin.jsx'
import CabinTableOperations from '../features/cabins/CabinTableOperations.jsx'

function Cabins() {
  const { t } = useTranslation()
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{t('cabins.allCabins')}</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  )
}

export default Cabins
