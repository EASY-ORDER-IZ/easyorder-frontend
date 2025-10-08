import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SignupBar from '../components/SignupBar';
import PagePath from '../components/PagePath';
import MainPage from '@/components/productGallery/MainPage';
const RootLayout = () => {
  return (
    <div>
      <SignupBar />
      <Navbar />
      <hr className="border-t border-gray-300 mx-22 " />
      <PagePath />
      <MainPage />
      <Outlet />
    </div>
  );
};

export default RootLayout;
