import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SignupBar from '../components/SignupBar';
import HeroSection from '@/components/HeroSection';
const RootLayout = () => {
  return (
    <div>
      <SignupBar />
      <Navbar />
      <HeroSection />
      <Outlet />
    </div>
  );
};

export default RootLayout;
