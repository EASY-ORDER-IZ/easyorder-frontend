import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';
import SignupBar from '../components/SignupBar';
import { Input } from '@/components/ui/input';

const RootLayout = () => {
  return (
    <div className="p-10">
      <SignupBar />
      <Navbar />
      <div className="mt-100 flex justify-center">
        <Input type="password" placeholder="Password" />
      </div>

      <Outlet />
    </div>
  );
};

export default RootLayout;
