import i18n from './i18n';

export const changeLanguage = (lng: string) => {
  document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
  i18n.changeLanguage(lng);
};
