import Heading from '../ui/Heading'
import Row from '../ui/Row.jsx'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm.jsx'
import { useTranslation } from 'react-i18next'

function Settings() {
  const { t } = useTranslation()
  return (
    <Row>
      <Heading as="h1">{t('settings.updateHotelInfo')}</Heading>
      <UpdateSettingsForm />
    </Row>
  )
}

export default Settings
