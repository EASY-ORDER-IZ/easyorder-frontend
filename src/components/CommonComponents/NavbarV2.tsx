import LogoSVG from '@/assets/svg/logo';
import { NavLink } from 'react-router';
import SearchComponent from './Search';
import { Heart, MenuIcon, Search, ShoppingCart, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const NavbarV2 = () => {
  return (
    <div className="flex w-full items-center justify-between gap-5 py-3 lg:justify-center lg:gap-10">
      <div className="flex gap-3">
        <div className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="!border-0"
              icon={<MenuIcon className="text-text-secondary cursor-pointer" size={18} />}
            ></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <NavLink to={'/'}>Shop</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to={''}>On Sale</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to={''}>New Arrivals</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to={''}>Brands</NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <LogoSVG className="flex max-w-[50%] lg:max-w-[100%]" />
      </div>

      <div className="hidden min-w-80 gap-5 lg:flex">
        <NavLink to={'/'}>Shop</NavLink>
        <NavLink to={''}>On Sale</NavLink>
        <NavLink to={''}>New Arrivals</NavLink>
        <NavLink to={''}>Brands</NavLink>
      </div>
      <div className="hidden lg:flex">
        <SearchComponent />
      </div>
      <div className="flex gap-6">
        <Search size={18} className="text-text-secondary flex cursor-pointer lg:hidden" />
        <ShoppingCart size={18} className="text-text-secondary cursor-pointer" />
        <Heart size={18} className="text-text-secondary cursor-pointer" />
        <User size={18} className="text-text-secondary cursor-pointer" />
      </div>
    </div>
  );
};

export default NavbarV2;
