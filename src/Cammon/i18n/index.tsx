import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

const fallbackLng = ['en']

i18n
   .use(Backend)
   .use(initReactI18next)
   .init({
      fallbackLng,
      backend: {
         loadPath: '/i18n/translations/{{lng}}.json'
      },
      react: {
         useSuspense: true
      }
   })

export default i18n
