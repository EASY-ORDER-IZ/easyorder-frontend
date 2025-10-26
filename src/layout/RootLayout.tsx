import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';
import SignupBar from '../components/SignupBar';
import { Footer } from '@/components/footer';
import { Toaster } from 'sonner';

const RootLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SignupBar />
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
