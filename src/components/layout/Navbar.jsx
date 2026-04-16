import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <header className="navbar bg-base-100 shadow-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold">
          FakeStore
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `btn btn-ghost ${isActive ? 'btn-active' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `btn btn-ghost ${isActive ? 'btn-active' : ''}`
            }
          >
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
