import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';
import SignupBar from '../components/SignupBar';
import { Button } from '@/components/ui/button/button';

const RootLayout = () => {
  return (
    <div>
      <SignupBar />
      <Navbar />
      <div className="mt-100 flex justify-center">
        <Button variant="primary" size="lg">
          Placeholder
        </Button>
      </div>

      <Outlet />
    </div>
  );
};

export default RootLayout;
