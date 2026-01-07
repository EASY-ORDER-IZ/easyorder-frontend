import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RootLayout from '../layout/RootLayout';
import CartPage from '@/pages/CartPage';
import CategoryPage from '@/pages/CategoryPage';
import Placeholder from '@/components/Placeholder';
import PaymentForm from '@/components/PaymentForm';
import CardItem from '@/components/CommonComponents/CardItem/CardSlider';
import StorePage from '@/pages/StorePage';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: { noPadding: true },
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
        path: 'categories',
        element: <CategoryPage />,
      },
      {
        path: '/placeholder',
        element: <Placeholder />,
      },
      {
        path: '/payment',
        element: <PaymentForm />,
      },
      {
        path: '/card',
        element: <CardItem />,
      },
      {
        path: '/store',
        element: <StorePage />,
      },
    ],
  },
]);

export default Router;
