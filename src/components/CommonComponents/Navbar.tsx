import { useState, type FC } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { CircleUserRound, Heart, Menu, ShoppingCart, X, Search } from 'lucide-react';
import LogoSVG from '@/assets/svg/logo';
import mobileLogo from '@/assets/svg/mobileLogo.svg';
import useMobile from '@/hooks/useMobile';
import SearchComponent from './Search';

interface NavbarProps {
  isModalOpen: boolean;
}

const Navbar: FC<NavbarProps> = () => {
  const isMobileMenu = useMobile(768);
  const [isOpen, setIsOpen] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const switchDialog = (target: 'sign-in' | 'sign-up' | 'forget-password' | 'email-verfiy') => {
    setSearchParams({ auth: target });
  };

  const linkClasses =
    'font-poppins text-text-600 hover:text-[var(--color-primary-main)] transition-colors duration-200 whitespace-nowrap';

  return (
    <nav className="font-satoshi relative mt-4 px-4 sm:px-8 lg:px-12">
      <div className="relative flex items-center gap-8">
        <div className="flex shrink-0 items-center gap-3">
          <div className="text-text-secondary flex gap-4 sm:hidden">
            <Heart size={20} className="cursor-pointer" />
            <ShoppingCart size={20} className="cursor-pointer" />
          </div>

          <LogoSVG className="hidden h-auto w-[8.5rem] sm:block lg:w-[10.5rem]" />
        </div>
        <div className="pointer-events-none absolute left-1/2 mt-6 -translate-x-1/2 sm:hidden">
          <img src={mobileLogo} alt="Mobile Logo" className="h-[2rem]" />
        </div>

        <div className="mt-6 hidden items-center justify-between gap-8 md:flex">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/new-in" className={linkClasses}>
            New In
          </NavLink>
          <NavLink to="/best-sellers" className={linkClasses}>
            Best Sellers
          </NavLink>
          <NavLink to="/categories" className={linkClasses}>
            Categories
          </NavLink>
        </div>
        <div className="ml-auto flex items-center gap-6 sm:hidden">
          <Search size={20} className="text-text-secondary cursor-pointer" />
          <button
            onClick={toggleMenu}
            className="text-text-600 px-0 hover:text-[var(--color-primary-main)] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <div className="hidden w-[12rem] md:block lg:w-[15rem] xl:w-[18rem]">
            <SearchComponent />
          </div>
        </div>
        <div className="text-text-secondary ml-auto hidden items-center gap-4 sm:flex lg:gap-6">
          <ShoppingCart
            size={24}
            className="cursor-pointer hover:text-[var(--color-primary-main)]"
          />
          <Heart size={24} className="cursor-pointer hover:text-[var(--color-primary-main)]" />
          <CircleUserRound
            size={24}
            onClick={() => switchDialog('sign-in')}
            className="cursor-pointer hover:text-[var(--color-primary-main)]"
          />
        </div>
      </div>

      {isMobileMenu && isOpen && (
        <div className="animate-in slide-in-from-top-2 absolute top-full left-0 z-50 flex w-full flex-col gap-5 border-t border-gray-100 bg-white px-6 py-6 shadow-lg duration-200">
          <NavLink to="/" onClick={closeMenu} className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/new-in" onClick={closeMenu} className={linkClasses}>
            New In
          </NavLink>
          <NavLink to="/best-sellers" onClick={closeMenu} className={linkClasses}>
            Best Sellers
          </NavLink>
          <NavLink to="/categories" onClick={closeMenu} className={linkClasses}>
            Categories
          </NavLink>

          <div className="mt-2 flex flex-col gap-4 border-t border-gray-100 pt-4 sm:hidden">
            <button
              type="button"
              className="text-text-600 flex items-center gap-2 transition-colors hover:text-[var(--color-primary-main)]"
              onClick={() => {
                switchDialog('sign-in');
                closeMenu();
              }}
            >
              <CircleUserRound size={18} />
              <span>Register</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
