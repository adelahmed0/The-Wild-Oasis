import { useState } from 'react'

import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'

import { useUser } from './useUser'
import { useTranslation } from 'react-i18next'
import { useUpdateUser } from './useUpdateUser.js'

function UpdateUserDataForm() {
  const { updateUser, isUpdating } = useUpdateUser()
  const { t } = useTranslation()
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: { email, user_metadata: { fullName: currentFullName } = {} },
  } = useUser()

  const [fullName, setFullName] = useState(currentFullName)
  const [avatar, setAvatar] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!fullName) return
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null)
          e.target.reset()
        },
      }
    )
  }

  function handleCancel() {
    setFullName(currentFullName)
    setAvatar(null)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label={t('account.email')}>
        <Input value={email} disabled />
      </FormRow>
      <FormRow label={t('account.fullName')}>
        <Input
          type="text"
          value={fullName}
          disabled={isUpdating}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label={t('account.avatar')}>
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          {t('account.reset')}
        </Button>
        <Button disabled={isUpdating}>{t('account.updateAccount')}</Button>
      </FormRow>
    </Form>
  )
}

export default UpdateUserDataForm
