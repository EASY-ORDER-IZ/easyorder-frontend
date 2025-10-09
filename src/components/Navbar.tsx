import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '@/localization/changeLang';
import useMobile from '@/hooks/useMobile';
import Logo from './Logo';
import { Button } from '@/components/ui/button/button';
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
        <nav className="font-satoshi text-base flex items-center justify-between px-22 py-4 relative bg-white w-full z-50">
            {isMobile ? (
                <div className="flex items-center justify-between w-full">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen((s) => !s)}
                    >
                        <img src={menu} alt="menu" className="w-6 h-6" />
                    </Button>

                    <div className="flex-1 flex justify-center">
                        <Logo className="w-34 h-8" />
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" aria-label="Search">
                            <img src={black_search_icon} alt="search" className="w-6 h-6 opacity-80" />
                        </Button>
                        <NavLink to="/cart" aria-label="Cart">
                            <Button variant="ghost" size="icon">
                                <img src={cart} alt="cart" className="w-6 h-6" />
                            </Button>
                        </NavLink>
                        <NavLink to="/profile" aria-label="Profile">
                            <Button variant="ghost" size="icon">
                                <img src={profile_icon} alt="profile" className="w-6 h-6" />
                            </Button>
                        </NavLink>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex items-center justify-between gap-6">
                        <Logo className="w-42 h-10" /> 

                        <div
                            className="flex gap-2 items-center cursor-pointer hover:underline"
                            onClick={() => setOpenShop((s) => !s)}
                        >
                            <NavLink to="/shop">{t('navbar.shop')}</NavLink>
                            <img
                                src={down_arrow}
                                alt="arrow"
                                className={`w-4 h-4 transition-transform duration-300 ${openShop ? 'rotate-180' : ''
                                    }`}
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

                    <div className="flex items-center gap-4">
                        <div className="bg-gray-100 gap-4 rounded-full px-4 py-3 flex items-center w-147">
                            <img src={search_icon} alt="search" className="w-6 h-6" />
                            <input
                                type="text"
                                className="outline-none bg-transparent flex-1 text-sm"
                                placeholder={t('navbar.placeholder') ?? ''}
                            />
                        </div>
                        <NavLink to="/cart">
                            <Button variant="ghost" size="icon" aria-label="Cart">
                                <img src={cart} alt="cart" className="w-6 h-6" />
                            </Button>
                        </NavLink>
                        <NavLink to="/profile">
                            <Button variant="ghost" size="icon" aria-label="Profile">
                                <img src={profile_icon} alt="profile" className="w-6 h-6" />
                            </Button>
                        </NavLink>
                    </div>
                </>
            )}

            {isMobile && mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
                    <div className="flex flex-col p-4">
                        <div className="border-b border-gray-100 pb-3">
                            <Button
                                variant="ghost"
                                className="flex items-center justify-between w-full text-left py-2 text-lg font-medium"
                                onClick={() => setOpenShop((s) => !s)}
                                aria-expanded={openShop}
                                aria-controls="shop-submenu"
                            >
                                <span>{t('navbar.shop')}</span>
                                <img
                                    src={down_arrow}
                                    alt="open shop"
                                    className={`w-5 h-5 transition-transform ${openShop ? 'rotate-180' : ''}`}
                                />
                            </Button>

                            {openShop && (
                                <div
                                    id="shop-submenu"
                                    className="pl-4 flex flex-col gap-2 mt-2"
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
                            className="py-3 border-b border-gray-100 text-lg font-medium"
                        >
                            {t('navbar.onsale')}
                        </NavLink>
                        <NavLink
                            to="/newarrivals"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-3 border-b border-gray-100 text-lg font-medium"
                        >
                            {t('navbar.newarrivals')}
                        </NavLink>
                        <NavLink
                            to="/brands"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-3 border-b border-gray-100 text-lg font-medium"
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
