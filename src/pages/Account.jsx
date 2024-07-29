import Heading from '../ui/Heading'
import Row from '../ui/Row'
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm.jsx'
import { useTranslation } from 'react-i18next'
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm.jsx'

function Account() {
  const { t } = useTranslation()
  return (
    <>
      <Heading as="h1">{t('account.accountHeading')}</Heading>

      <Row>
        <Heading as="h3">{t('account.account')}</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">{t('account.updatePassword')}</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  )
}

export default Account
