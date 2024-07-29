import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enTranslation from '../../public/locales/en/translation.json'
import arTranslation from '../../public/locales/ar/translation.json'

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
}
const storedLanguage = localStorage.getItem('language') // Retrieve language preference from local storage
const initialLanguage = storedLanguage || 'en' // Default to 'en' if no preference is found

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
