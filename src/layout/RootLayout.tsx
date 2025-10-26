import Header from '@/components/CommonComponents/Header';
import NavbarV2 from '@/components/CommonComponents/NavbarV2';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[2000px] flex-col">
        <div className="flex flex-col justify-center">
          <Header />
          <NavbarV2 />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
