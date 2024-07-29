import Spinner from '../../ui/Spinner'
import { useSettings } from './useSettings.js'
import { useUpdateSetting } from './useUpdateSetting.js'

import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import { useTranslation } from 'react-i18next'

function UpdateSettingsForm() {
  const { t } = useTranslation()
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isPending: isLoading,
  } = useSettings()
  const { updateSetting, isUpdating } = useUpdateSetting()

  // return <Spinner />;
  if (isLoading) return <Spinner />

  function handleBlur(e, field) {
    const { value } = e.target

    if (!value) return
    updateSetting({ [field]: value })
  }

  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow label={t('settings.minimumBookingNights')}>
        <Input
          type="number"
          defaultValue={minBookingLength}
          onBlur={(e) => handleBlur(e, 'minBookingLength')}
          disabled={isUpdating}
          id="min-nights"
        />
      </FormRow>
      <FormRow label={t('settings.maximumBookingNights')}>
        <Input
          type="number"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleBlur(e, 'maxBookingLength')}
          disabled={isUpdating}
          id="max-nights"
        />
      </FormRow>
      <FormRow label={t('settings.maximumBookingGuests')}>
        <Input
          type="number"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleBlur(e, 'maxGuestsPerBooking')}
          disabled={isUpdating}
          id="max-guests"
        />
      </FormRow>
      <FormRow label={t('settings.breakfastPrice')}>
        <Input
          type="number"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleBlur(e, 'breakfastPrice')}
          disabled={isUpdating}
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
