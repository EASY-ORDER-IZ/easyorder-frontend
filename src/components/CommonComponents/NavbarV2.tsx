import LogoSVG from '@/assets/svg/logo';
import { NavLink } from 'react-router-dom';
import SearchComponent from './Search';
import { ChevronDown, CircleUserRound, Heart, MenuIcon, ShoppingCart } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Modal from './Modal';
import SignInPage from '@/pages/SignInPage';
import { useState } from 'react';

interface NavbarProps {
  isModalOpen: boolean;
}

const NavbarV2 = ({ isModalOpen }: NavbarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`bg-background ${
        open || isModalOpen ? '' : 'sticky top-0 z-70'
      } flex w-full items-center justify-between gap-6 px-5 py-4 lg:gap-10`}
    >
      <div className="flex w-full max-w-[70%] gap-3 lg:w-auto">
        <div className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger
              icon={<MenuIcon className="text-text-secondary cursor-pointer" size={18} />}
            />
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <NavLink to="/">Shop</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="">On Sale</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="">New Arrivals</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="">Brands</NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <LogoSVG className="mb-1 flex max-w-[50%] lg:max-w-[100%]" />
      </div>
      <div className="hidden min-w-80 gap-3 lg:flex">
        <div className="flex cursor-pointer items-center">
          <NavLink to="/">Shop</NavLink>
          <ChevronDown />
        </div>
        <NavLink to="">On Sale</NavLink>
        <NavLink to="">New Arrivals</NavLink>
        <NavLink to="">Brands</NavLink>
      </div>
      <div className="hidden min-w-[25%] lg:flex">
        <SearchComponent />
      </div>
      <div className="flex gap-6">
        <ShoppingCart size={18} className="text-text-secondary cursor-pointer" />
        <Heart size={18} className="text-text-secondary cursor-pointer" />
        <Modal
          open={open}
          setOpen={setOpen}
          trigger={<CircleUserRound size={18} className="text-text-secondary cursor-pointer" />}
          page={<SignInPage />}
        />
      </div>
    </div>
  );
};

export default NavbarV2;
