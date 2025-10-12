import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';
import SignupBar from '../components/SignupBar';

const RootLayout = () => {
  return (
    <div>
      <SignupBar />
      <Navbar />

      <Outlet />
    </div>
  );
};

export default RootLayout;
