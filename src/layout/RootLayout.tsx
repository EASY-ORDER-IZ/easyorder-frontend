import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';
import SignupBar from '../components/SignupBar';
import { Footer } from '@/components/footer';

const RootLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SignupBar />
      <Navbar />
      <Outlet />

      <Footer />
    </div>
  );
};

export default RootLayout;
