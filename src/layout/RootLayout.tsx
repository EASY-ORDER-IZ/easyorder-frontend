import Header from '@/components/CommonComponents/Header';
import NavbarV2 from '@/components/CommonComponents/NavbarV2';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center">
        <Header />
      </div>
      <div className="flex w-full px-7">
        <NavbarV2 />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
