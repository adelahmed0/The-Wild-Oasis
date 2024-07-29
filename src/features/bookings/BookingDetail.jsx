import styled from 'styled-components'

import BookingDataBox from './BookingDataBox'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import Tag from '../../ui/Tag'
import ButtonGroup from '../../ui/ButtonGroup'
import Button from '../../ui/Button'
import ButtonText from '../../ui/ButtonText'

import { useMoveBack } from '../../hooks/useMoveBack'
import { useBooking } from './useBooking.js'
import Spinner from '../../ui/Spinner.jsx'
import { useNavigate } from 'react-router-dom'
import { useCheckout } from '../check-in-out/useCheckout.js'
import Modal from '../../ui/Modal.jsx'
import ConfirmDelete from '../../ui/ConfirmDelete.jsx'
import { useDeleteBooking } from './useDeleteBooking.js'
import { HiArrowUpOnSquare } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import Empty from '../../ui/Empty.jsx'

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`

function BookingDetail() {
  const { booking, isLoading } = useBooking()
  const { checkout, isCheckingOut } = useCheckout()
  const { deleteBooking, isDeleting } = useDeleteBooking()
  const moveBack = useMoveBack()
  const navigate = useNavigate()
  const { t } = useTranslation()

  if (isLoading) return <Spinner />
  if (!booking) return <Empty resourceName="booking" />

  const { status, id: bookingId } = booking

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  }

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">
            {t('bookings.booking')} #{bookingId}
          </Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; {t('backButton')}</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            {t('bookings.checkIn')}
          </Button>
        )}
        {status === 'checked-in' && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            {t('bookings.checkOut')}
          </Button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">{t('bookings.deleteBooking')}</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName={t('bookings.booking')}
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSuccess: () => navigate(-1),
                })
              }
            />
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          {t('backButton')}
        </Button>
      </ButtonGroup>
    </>
  )
}

export default BookingDetail
