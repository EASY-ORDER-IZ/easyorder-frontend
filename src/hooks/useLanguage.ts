import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  return { toggleLanguage };
};
