import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
