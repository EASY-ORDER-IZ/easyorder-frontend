import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RootLayout from '../layout/RootLayout';
import CartPage from '@/pages/CartPage';
import CategoryPage from '@/pages/CategoryPage';
import CardItem from '@/components/CommonComponents/CardItem/CardSlider';
import OTPPage from '@/pages/OTPPage';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <div>About Page</div>,
      },
      {
        path: 'help',
        element: <div>Help Page</div>,
      },

      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'cate/:title',
        element: <CategoryPage />,
      },
      {
        path: '/card',
        element: <CardItem />,
      },
      {
        path: '/email-verify',
        element: <OTPPage />,
      },
    ],
  },
]);

export default Router;
