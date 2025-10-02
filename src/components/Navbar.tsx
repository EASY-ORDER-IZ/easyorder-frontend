import { Button } from '@/components/ui/button/button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { useLanguage } from '@/hooks/useLanguage';
import { useThemes } from '@/hooks/useThemes';

const Navbar = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = useLanguage();
  const { toggleTheme } = useThemes();

  const navigate = useNavigate();
  return (
    <div className="flex    justify-between items-center px-21 py-10 ">
      <Logo className="w-[168.44px] h-[40px]" />
      <div className="flex gap-4 bg-white px-4 py-2 rounded-full w-50">
        <NavLink
          to="about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full hover:bg-gray-100 w-20 ${isActive ? 'bg-gray-200 text-red-600' : ''}`
          }
        >
          {t('About')}
        </NavLink>
        <NavLink
          to="help"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full font-integral hover:bg-gray-100 w-20 ${isActive ? 'bg-gray-200 text-red-600' : ''}`
          }
        >
          {t('help')}
        </NavLink>
      </div>
      <div className="flex gap-4 px-4 py-2  w-50">
        <Button onClick={() => navigate('signin')}>Sign In</Button>
        <Button onClick={() => navigate('signup')}>Sign Up</Button>
      </div>
      <Button onClick={toggleLanguage}>change language</Button>
      <Button onClick={toggleTheme}>change theme</Button>
    </div>
  );
};

export default Navbar;
