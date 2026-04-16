import { createBrowserRouter } from 'react-router';

import MainLayout from '@/components/layout/MainLayout';
import Hompage from '@/components/pages/HomePage';
import CartPage from '@/components/pages/CartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Hompage />,
      },
      {
        index: true,
        element: <CartPage />,
      },
    ],
  },
]);
