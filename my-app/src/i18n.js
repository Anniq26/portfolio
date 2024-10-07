import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import geTranslation from './locales/ge.json'; // or ka.json if you prefer

const resources = {
  en: {
    translation: enTranslation,
  },
  ge: { // If you want to use 'ge', otherwise use 'ka'
    translation: geTranslation,
  },
};

i18n
  .use(initReactI18next) // Integrating i18n with react-i18next
  .init({
    resources,
    lng: 'ge', // Default language
    fallbackLng: 'en', // Fallback to English
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
