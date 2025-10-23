import LogoSVG from '@/assets/svg/logo';
import { NavLink } from 'react-router';
import SearchComponent from './Search';
import { ChevronDown, Heart, MenuIcon, ShoppingCart } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Modal from './Modal';

const NavbarV2 = () => {
  return (
    <div className="s flex w-full items-center justify-between gap-6 px-3 lg:justify-center lg:gap-10">
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

        <LogoSVG className="mb-1 flex max-w-[50%] lg:max-w-[100%]" />
      </div>

      <div className="hidden min-w-80 gap-5 lg:flex">
        <div className="flex cursor-pointer items-center">
          <NavLink to={'/'}>Shop</NavLink>
          <ChevronDown />
        </div>
        <NavLink to={''}>On Sale</NavLink>
        <NavLink to={''}>New Arrivals</NavLink>
        <NavLink to={''}>Brands</NavLink>
      </div>
      <div className="hidden lg:flex">
        <SearchComponent />
      </div>
      <div className="flex gap-6">
        <ShoppingCart size={18} className="text-text-secondary cursor-pointer" />
        <Heart size={18} className="text-text-secondary cursor-pointer" />
        <Modal />
      </div>
    </div>
  );
};

export default NavbarV2;
