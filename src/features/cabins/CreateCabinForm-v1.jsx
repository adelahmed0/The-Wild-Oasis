import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import { useForm } from 'react-hook-form'
import { createCabin } from '../../services/apiCabins.js'
import { useTranslation } from 'react-i18next'
import FormRow from '../../ui/FormRow.jsx'

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm()
  const { errors } = formState
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created')
      queryClient.invalidateQueries('cabins')
      reset()
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] })
  }

  function onError(errors) {
    // console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label={t('cabins.cabinName')} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label={t('cabins.cabinPhoto')}>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          {t('cabins.reset')}
        </Button>
        <Button disabled={isCreating}>{t('cabins.addCabin')}</Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
