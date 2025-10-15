import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RootLayout from '../layout/RootLayout';
import CartPage from '@/pages/CartPage';
import CategoryPage from '@/pages/CategoryPage';
import SignInPage from '@/pages/SignInPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
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
        path: 'signin',
        element: <SignInPage />,
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
    ],
  },
]);

export default Router;
