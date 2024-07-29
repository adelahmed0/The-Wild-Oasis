import { useState } from 'react'
import Button from '../../ui/Button'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import FormRowVertical from '../../ui/FormRowVertical'
import { useTranslation } from 'react-i18next'
import { useLogin } from './useLogin.js'
import SpinnerMini from '../../ui/SpinnerMini.jsx'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading } = useLogin()
  const { t } = useTranslation()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) return null
    login(
      { email, password },
      {
        onStalled: () => {
          setEmail('')
          setPassword('')
        },
      }
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label={t('authentication.email')}>
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label={t('authentication.password')}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {!isLoading ? t('authentication.loginButton') : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  )
}

export default LoginForm
