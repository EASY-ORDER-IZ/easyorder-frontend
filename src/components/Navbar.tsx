import { Button } from '@/components/ui/button/button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { useLanguage } from '@/hooks/useLanguage';
import { useThemes } from '../hooks/useThemes';

const Navbar = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = useLanguage();
  const { toggleTheme } = useThemes();

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-21 py-10">
      <Logo className="h-[40px] w-[168.44px]" />
      <div className="flex w-50 gap-4 rounded-full bg-white px-4 py-2">
        <NavLink
          to="about"
          className={({ isActive }) =>
            `w-20 rounded-full px-4 py-2 hover:bg-gray-100 ${isActive ? 'bg-gray-200 text-red-600' : ''}`
          }
        >
          {t('About')}
        </NavLink>
        <NavLink
          to="help"
          className={({ isActive }) =>
            `font-integral w-20 rounded-full px-4 py-2 hover:bg-gray-100 ${isActive ? 'bg-gray-200 text-red-600' : ''}`
          }
        >
          {t('help')}
        </NavLink>
      </div>
      <div className="flex w-50 gap-4 px-4 py-2">
        <Button className="text-button-text" onClick={() => navigate('signin')}>
          Sign In
        </Button>
        <Button onClick={() => navigate('signup')}>Sign Up</Button>
      </div>
      <Button onClick={toggleLanguage}>change language</Button>
      <Button onClick={toggleTheme}>change theme</Button>
    </div>
  );
};

export default Navbar;
