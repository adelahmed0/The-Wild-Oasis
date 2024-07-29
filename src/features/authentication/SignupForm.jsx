import Button from '../../ui/Button'
import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useSignup } from './useSignup.js'

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, handleSubmit, getValues, reset } = useForm()
  const { errors } = formState
  const { t } = useTranslation()
  const { signup, isLoading } = useSignup()

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset,
      }
    )
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={t('users.fullName')} error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register('fullName', {
            required: t('users.errors.fullName'),
          })}
        />
      </FormRow>

      <FormRow label={t('users.email')} error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register('email', {
            required: t('users.errors.email'),
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: t('users.errors.emailFormat'),
            },
          })}
        />
      </FormRow>

      <FormRow label={t('users.password')} error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register('password', {
            required: t('users.errors.password'),
            minLength: {
              value: 8,
              message: t('users.errors.passwordLength'),
            },
          })}
        />
      </FormRow>

      <FormRow
        label={t('users.passwordConfirm')}
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: t('users.errors.password'),
            validate: (value) =>
              value === getValues().password || t('users.errors.passwordMatch'),
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading}>
          {t('users.reset')}
        </Button>
        <Button disabled={isLoading}>{t('users.createNewUser')}</Button>
      </FormRow>
    </Form>
  )
}

export default SignupForm
