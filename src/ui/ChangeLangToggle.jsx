import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import Select from './Select.jsx'
import Button from './Button.jsx'

const ChangeLangToggle = () => {
  const { t } = useTranslation()
  const changeLanguage = (lng) => {
    window.location.reload()
    localStorage.setItem('language', lng) // Store language preference in local storage
    i18n.changeLanguage(lng)
  }
  return (
    <>
      {localStorage.getItem('language') === 'ar' ? (
        <Button
          variation="primary"
          size="small"
          onClick={() => changeLanguage('en')}
        >
          {t('changeLangButton.english')}
        </Button>
      ) : (
        <Button
          variation="primary"
          size="small"
          onClick={() => changeLanguage('ar')}
        >
          {t('changeLangButton.arabic')}
        </Button>
      )}
    </>
  )
}

export default ChangeLangToggle
