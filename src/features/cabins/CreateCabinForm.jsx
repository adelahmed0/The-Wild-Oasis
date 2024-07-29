import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import FormRow from '../../ui/FormRow.jsx'
import { useCreateCabin } from './useCreateCabin.js'
import { useEditCabin } from './useEditCabin.js'

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit
  const isEditSession = Boolean(editId)
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })
  const { errors } = formState
  const { t } = useTranslation()
  const { createCabin, isCreating } = useCreateCabin()

  const { editCabin, isEditing } = useEditCabin()
  const isWorking = isCreating || isEditing

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0]
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset()
            onCloseModal?.()
          },
        }
      )
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset()
            onCloseModal?.()
          },
        }
      )
  }

  function onError(errors) {
    // console.log(errors)
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label={t('cabins.cabinName')} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow
        label={t('cabins.cabinCapacity')}
        error={errors?.maxCapacity?.message}
      >
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow
        label={t('cabins.cabinPrice')}
        error={errors?.regularPrice?.message}
      >
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This field is required',
            min: { value: 0, message: 'Price should be at least 0' },
          })}
        />
      </FormRow>

      <FormRow
        label={t('cabins.cabinDiscount')}
        error={errors?.discount?.message}
      >
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              value <= getValues('regularPrice') ||
              'Discount should be less than the price',
          })}
        />
      </FormRow>

      <FormRow
        label={t('cabins.cabinDescription')}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label={t('cabins.cabinPhoto')}>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: isEditSession ? false : 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          onClick={() => onCloseModal?.()}
          variation="secondary"
          type="reset"
        >
          {t('cabins.reset')}
        </Button>
        <Button disabled={isWorking}>
          {/*{t('cabins.addCabin')}*/}
          {isEditSession ? t('cabins.editThisCabin') : t('cabins.addNewCabin')}
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
