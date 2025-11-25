import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useMobile from '@/hooks/useMobile';
import Logo from './Logo';
import { navbarlogo } from '../../assets/icons';
import { Button } from '@/components/ui/button/button';
import {
  cart,
  down_arrow,
  search_icon,
  profile_icon,
  menu,
  black_search_icon,
} from '../../assets/icons';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [openShop, setOpenShop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMobile(768);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <nav className="font-satoshi relative z-50 flex w-full items-center justify-between bg-white px-22 py-4 text-base">
      {isMobile ? (
        <div className="flex w-full items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((s) => !s)}
          >
            <img src={menu} alt="menu" className="h-6 w-6" />
          </Button>

          <div className="flex flex-1 justify-center">
            <Logo src={navbarlogo} className="h-8 w-34" />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <img src={black_search_icon} alt="search" className="h-6 w-6 opacity-80" />
            </Button>
            <NavLink to="/cart" aria-label="Cart">
              <Button variant="ghost" size="icon">
                <img src={cart} alt="cart" className="h-6 w-6" />
              </Button>
            </NavLink>
            <NavLink to="/profile" aria-label="Profile">
              <Button variant="ghost" size="icon">
                <img src={profile_icon} alt="profile" className="h-6 w-6" />
              </Button>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="flex w-310 items-center justify-between gap-10">
          <Logo src={navbarlogo} className="h-10 w-42" />
          <div className="flex w-80 items-center gap-6">
            <div
              className="flex w-14 cursor-pointer items-center gap-1 hover:underline"
              onClick={() => setOpenShop((s) => !s)}
            >
              <NavLink to="/shop" className="text-[16px]">
                {t('navbar.shop')}
              </NavLink>
              <img
                src={down_arrow}
                alt="arrow"
                className={`h-4 w-4 transition-transform duration-300 ${
                  openShop ? 'rotate-180' : ''
                }`}
              />
            </div>

            <NavLink to="/onsale" className="font-Satoshi w-14 text-[16px] hover:underline">
              {t('navbar.onsale')}
            </NavLink>
            <NavLink to="/newarrivals" className="font-Satoshi w-22 text-[16px] hover:underline">
              {t('navbar.newarrivals')}
            </NavLink>
            <NavLink to="/brands" className="text-[16px] hover:underline">
              {t('navbar.brands')}
            </NavLink>
          </div>

          <div className="flex w-140 items-center gap-4 rounded-full bg-gray-100 px-4 py-3">
            <img src={search_icon} alt="search" className="h-6 w-6" />
            <input
              type="text"
              className="flex-1 bg-transparent text-sm outline-none"
              placeholder={t('navbar.placeholder') ?? ''}
            />
          </div>

          <div className="flex items-center gap-4">
            <NavLink to="/cart">
              <Button variant="ghost" size="icon" aria-label="Cart">
                <img src={cart} alt="cart" className="h-6 w-6" />
              </Button>
            </NavLink>
            <NavLink to="/profile">
              <Button variant="ghost" size="icon" aria-label="Profile">
                <img src={profile_icon} alt="profile" className="h-6 w-6" />
              </Button>
            </NavLink>
          </div>
        </div>
      )}

      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 z-50 border-t border-gray-200 bg-white shadow-lg">
          <div className="flex flex-col p-4">
            <div className="border-b border-gray-100 pb-3">
              <Button
                variant="ghost"
                className="flex w-full items-center justify-between py-2 text-left text-lg font-medium"
                onClick={() => setOpenShop((s) => !s)}
                aria-expanded={openShop}
                aria-controls="shop-submenu"
              >
                <span>{t('navbar.shop')}</span>
                <img
                  src={down_arrow}
                  alt="open shop"
                  className={`h-5 w-5 transition-transform ${openShop ? 'rotate-180' : ''}`}
                />
              </Button>

              {openShop && (
                <div
                  id="shop-submenu"
                  className="mt-2 flex flex-col gap-2 pl-4"
                  role="region"
                  aria-label={t('navbar.shopSubmenu') ?? 'Shop submenu'}
                >
                  <NavLink
                    to="/shop/category1"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-black"
                  >
                    {t('navbar.category1') ?? 'Category 1'}
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/onsale"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-3 text-lg font-medium"
            >
              {t('navbar.onsale')}
            </NavLink>
            <NavLink
              to="/newarrivals"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-3 text-lg font-medium"
            >
              {t('navbar.newarrivals')}
            </NavLink>
            <NavLink
              to="/brands"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-3 text-lg font-medium"
            >
              {t('navbar.brands')}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
