import Heading from '../ui/Heading'
import { useTranslation } from 'react-i18next'
import SignupForm from '../features/authentication/SignupForm.jsx'

function NewUsers() {
  const { t } = useTranslation()
  return (
    <>
      <Heading as="h1">{t('users.usersHeading')}</Heading>
      <SignupForm />
    </>
  )
}

export default NewUsers
