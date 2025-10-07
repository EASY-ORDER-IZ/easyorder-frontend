import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '@/localization/changeLang';
import useMobile from '@/hooks/useMobile';
import Logo from './Logo';
import {
  cart,
  down_arrow,
  search_icon,
  profile_icon,
  menu,
  black_search_icon,
} from '../assets/icons';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openShop, setOpenShop] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const isMobile = useMobile(768);

  const toggleLanguage = (): void => {
    changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenShop(false);
  }, [location]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <nav className="font-satoshi text-base flex items-center justify-between sm:px-22 px-3 py-4 relative">
      <div className={`${isMobile ? 'flex-row-reverse ' : ''} flex items-center sm:gap-8`}>
        <Logo className="w-[134.7px] h-[32px] sm:w-[168.44px] sm:h-[40px]" />

        {!isMobile ? (
          <div className="flex items-center gap-6 m-2">
            <div
              className="flex gap-2 items-center cursor-pointer hover:underline"
              onClick={() => setOpenShop((s) => !s)}
            >
              <NavLink to="/shop">{t('navbar.shop')}</NavLink>
              <img
                src={down_arrow}
                alt="arrow"
                className={`w-4 h-4 transition-transform duration-300 ${openShop ? 'rotate-180' : ''}`}
              />
            </div>
            <NavLink to="/onsale" className="hover:underline">
              {t('navbar.onsale')}
            </NavLink>
            <NavLink to="/newarrivals" className="hover:underline">
              {t('navbar.newarrivals')}
            </NavLink>
            <NavLink to="/brands" className="hover:underline">
              {t('navbar.brands')}
            </NavLink>
          </div>
        ) : (
          <button
            type="button"
            className="p-2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((s) => !s)}
          >
            <img src={menu} alt="menu" className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="flex-1 mx-4">
        {isMobile ? (
          <div className="flex justify-end">
            <button type="button">
              <img
                src={black_search_icon}
                alt="search"
                className="w-[24px] h-[24px] sm:w-6 sm:h-6 sm:cursor-pointer opacity-80"
              />
            </button>
          </div>
        ) : (
          <div className="bg-[#F0F0F0] gap-4 w-full m-2  max-w-[687px] rounded-full px-4 py-3 flex items-center">
            <img src={search_icon} alt="search" className="w-6 h-6" />
            <input
              type="text"
              className="outline-none bg-transparent flex-1"
              placeholder={t('navbar.placeholder') ?? ''}
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3.5">
        <NavLink to="/cart">
          <img
            src={cart}
            alt="cart"
            className="w-[24px] h-[24px] sm:w-6 sm:h-6 sm:cursor-pointer"
          />
        </NavLink>
        <NavLink to="/profile">
          <img
            src={profile_icon}
            alt="profile"
            className="w-[24px] h-[24px] sm:w-6 sm:h-6 sm:cursor-pointer"
          />
        </NavLink>
      </div>

      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-md p-4">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setOpenShop((s) => !s)}
              className="flex items-center justify-between w-full text-left"
            >
              <span>{t('navbar.shop')}</span>
              <img
                src={down_arrow}
                alt="open shop"
                className={`w-5 h-5 transition-transform ${openShop ? 'rotate-180' : ''}`}
              />
            </button>

            {openShop && (
              <div className="pl-4 flex flex-col gap-2">
                <NavLink to="/shop/category1" onClick={() => setMobileMenuOpen(false)}>
                  {t('navbar.category1') ?? 'Category 1'}
                </NavLink>
              </div>
            )}

            <NavLink to="/onsale" onClick={() => setMobileMenuOpen(false)}>
              {t('navbar.onsale')}
            </NavLink>
            <NavLink to="/newarrivals" onClick={() => setMobileMenuOpen(false)}>
              {t('navbar.newarrivals')}
            </NavLink>
            <NavLink to="/brands" onClick={() => setMobileMenuOpen(false)}>
              {t('navbar.brands')}
            </NavLink>

            <div className="pt-2 border-t mt-2">
              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="text-left"
              ></button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
