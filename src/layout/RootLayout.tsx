import { Outlet } from 'react-router-dom';
import ProductDetailsPage from '@/pages/ProductDetailsPage';

const RootLayout = () => {
  return (
    <div>
      <ProductDetailsPage />
      <Outlet />
    </div>
  );
};

export default RootLayout;
