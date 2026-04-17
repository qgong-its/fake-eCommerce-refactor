import { createBrowserRouter } from 'react-router';

import MainLayout from '@/components/layout/MainLayout';
import AdminLayout from '@/components/layout/AdminLayout';

import HomPage from '@/components/pages/HomePage';
import CartPage from '@/components/pages/CartPage';
import CatgoryPage from '@/components/pages/CatgoryPage';
import AdminPage from '@/components/pages/AdminPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'category/:categoryName',
        element: <CatgoryPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
