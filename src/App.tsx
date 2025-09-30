import { RouterProvider } from 'react-router-dom';
import Router from './router/Router';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import './locales/i18n';

const App = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return <RouterProvider router={Router} />;
};

export default App;
