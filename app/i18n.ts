import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        translation: {
          // Add your translations here
        },
      },
    },
    lng: 'zh', // Default language
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18next;