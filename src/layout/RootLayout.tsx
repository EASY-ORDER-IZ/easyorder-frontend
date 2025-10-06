import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
