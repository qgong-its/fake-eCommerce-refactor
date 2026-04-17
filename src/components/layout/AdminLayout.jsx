import { Outlet, Link } from 'react-router';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <header className="navbar bg-base-100 shadow-md">
        <div className="mx-auto flex w-full max-w-6xl justify-between px-6">
          <h1 className="font-bold">Admin Dashboard</h1>
          <Link to="/" className="btn btn-sm">
            Back to Store
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
