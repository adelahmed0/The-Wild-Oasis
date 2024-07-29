import { useTranslation } from 'react-i18next'

function Empty({ resourceName }) {
  const { t } = useTranslation()
  return (
    <p>
      {t('emptyData')} {resourceName}
    </p>
  )
}

export default Empty
