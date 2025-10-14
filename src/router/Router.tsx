import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RootLayout from '../layout/RootLayout';
import Auth from '../services/Auth';
import LoginPage from '@/pages/LoginPage';
import CartPage from '@/pages/CartPage';
import CategoryPage from '@/pages/CategoryPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: Auth,
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
        path: 'signin',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <div>Sign Up Page</div>,
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
        path : '/productDetails',
        element: <ProductDetailsPage />
      }
    ],
  },
]);

export default Router;
