import Button from '../../ui/Button'
import { useCheckout } from './useCheckout.js'
import { useTranslation } from 'react-i18next'

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkout } = useCheckout()
  const { t } = useTranslation()
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      {t('dashboard.checkout')}
    </Button>
  )
}

export default CheckoutButton
