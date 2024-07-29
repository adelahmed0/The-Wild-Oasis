import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import i18n from './lib/i18n'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ui/ErrorFallback.jsx'

// const storedLanguage = localStorage.getItem('language')
// i18n.on('languageChanged', (lng) => {
//   if (storedLanguage === 'ar') {
//     document.documentElement.dir = 'rtl'
//     document.documentElement.lang = 'ar'
//   } else {
//     document.documentElement.dir = 'ltr'
//     document.documentElement.lang = lng
//   }
//   localStorage.setItem('language', lng)
//   // document.documentElement.lang = lng
//   // document.documentElement.dir = storedLanguage === 'ar' ? 'rtl' : 'ltr'
// })

// console.log(storedLanguage, typeof storedLanguage)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
