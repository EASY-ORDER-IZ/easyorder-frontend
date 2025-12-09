import LogoSVG from '@/assets/svg/logo';
import { NavLink, useSearchParams } from 'react-router-dom';
import SearchComponent from './Search';
import { CircleUserRound, Heart, MenuIcon, ShoppingCart, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavbarProps {
  isModalOpen: boolean;
}

const Navbar = ({ isModalOpen }: NavbarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const switchDialog = (target: 'sign-in' | 'sign-up' | 'forget-password' | 'email-verfiy') => {
    setSearchParams({ auth: target });
  };

  return (
    <nav className="font-satoshi relative z-50 w-full bg-white text-base">
      <div
        className={`bg-background ${
          searchParams || isModalOpen ? '' : 'sticky top-0 z-70'
        } w-full px-4 py-3 lg:px-22 lg:py-4`}
      >
        <div className="flex w-full items-center justify-between lg:hidden">
          <div className="flex items-center gap-3">
            <NavLink to="/wish">
              <Heart className="text-text-secondary h-5 w-5 cursor-pointer" />
            </NavLink>

            <NavLink to="/cart">
              <ShoppingCart className="text-text-secondary h-5 w-5 cursor-pointer" />
            </NavLink>
          </div>

          <LogoSVG className="max-w-[40%]" />

          <div className="flex items-center gap-3">
            <Search className="text-text-secondary cursor-pointer" size={25} />
            <CircleUserRound
              onClick={() => switchDialog('sign-in')}
              size={25}
              className="text-text-secondary cursor-pointer"
            />

            <DropdownMenu>
              <DropdownMenuTrigger
                icon={<MenuIcon className="text-text-secondary cursor-pointer" size={16} />}
              />

              <DropdownMenuContent className="w-40">
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? 'cursor-pointer text-[var(--color-primary-main)]'
                        : 'cursor-pointer hover:text-[var(--color-primary-main)]'
                    }
                  >
                    Home
                  </NavLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <NavLink
                    to="/new_in"
                    className={({ isActive }) =>
                      isActive
                        ? 'cursor-pointer text-[var(--color-primary-main)]'
                        : 'cursor-pointer hover:text-[var(--color-primary-main)]'
                    }
                  >
                    New In
                  </NavLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? 'cursor-pointer text-[var(--color-primary-main)]'
                        : 'cursor-pointer hover:text-[var(--color-primary-main)]'
                    }
                  >
                    Best sellers
                  </NavLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <NavLink
                    to="/category"
                    className={({ isActive }) =>
                      isActive
                        ? 'cursor-pointer text-[var(--color-primary-main)]'
                        : 'cursor-pointer hover:text-[var(--color-primary-main)]'
                    }
                  >
                    Categories
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="hidden w-full items-center justify-between lg:flex">
          <LogoSVG className="max-w-[100%]" />

          <div className="flex min-w-80 gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'cursor-pointer text-[var(--color-primary-main)]'
                  : 'cursor-pointer hover:text-[var(--color-primary-main)]'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/new_in"
              className={({ isActive }) =>
                isActive
                  ? 'cursor-pointer text-[var(--color-primary-main)]'
                  : 'cursor-pointer hover:text-[var(--color-primary-main)]'
              }
            >
              New In
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'cursor-pointer text-[var(--color-primary-main)]'
                  : 'cursor-pointer hover:text-[var(--color-primary-main)]'
              }
            >
              Best sellers
            </NavLink>

            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive
                  ? 'cursor-pointer text-[var(--color-primary-main)]'
                  : 'cursor-pointer hover:text-[var(--color-primary-main)]'
              }
            >
              Categories
            </NavLink>
          </div>

          <div className="min-w-[35%]">
            <SearchComponent />
          </div>

          <div className="flex gap-6">
            <NavLink to="/cart">
              <ShoppingCart className="text-text-secondary h-5 w-5 cursor-pointer" />
            </NavLink>
            <NavLink to="/wish">
              <Heart className="text-text-secondary h-5 w-5 cursor-pointer" />
            </NavLink>
            <CircleUserRound
              onClick={() => switchDialog('sign-in')}
              className="text-text-secondary h-5 w-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
