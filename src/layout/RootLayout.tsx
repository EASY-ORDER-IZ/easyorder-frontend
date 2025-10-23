import Header from '@/components/CommonComponents/Header';
import NavbarV2 from '@/components/CommonComponents/NavbarV2';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <NavbarV2 />
      <Outlet />
    </div>
  );
};

export default RootLayout;
