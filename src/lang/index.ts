import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import en from './file/en.json';
import zh from './file/zh.json';
import ma from './file/ma.json';


const resources = {
    en: {
        translation: en
    },
    zh: {
        translation: zh
    },
    ma: {
        translation: ma
    }
};


i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('language_lucky') || 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;

