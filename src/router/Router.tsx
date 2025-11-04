import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RootLayout from '../layout/RootLayout';
import CartPage from '@/pages/CartPage';
import CategoryPage from '@/pages/CategoryPage';
import SignInPage from '@/pages/SignInPage';
import CardItem from '@/components/CommonComponents/CardItem/CardSlider';
import SignUpPage from '@/pages/SignUpPage';
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
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: 'sign-up',
        element: (
          <div>
            <SignUpPage />
          </div>
        ),
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
    ],
  },
]);

export default Router;
