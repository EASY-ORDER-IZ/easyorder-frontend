import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';

const RootLayout = () => {
  return (
    <div className="px-15 py-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
