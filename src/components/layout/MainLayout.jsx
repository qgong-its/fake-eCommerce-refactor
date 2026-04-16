import { Outlet } from 'react-router';

import Navbar from '@/components/layout/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
