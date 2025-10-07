import { Outlet } from 'react-router-dom';
import Navbar from '../components/CommonComponents/Navbar';

const RootLayout = () => {
  return (
    <div className="px-5 py-5 lg:px-15">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
