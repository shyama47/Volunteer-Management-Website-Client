
import { useContext, useState } from "react";
import { AuthContext } from "../../pages/Provider/AuthContext";
import { toast } from "react-toastify";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    logOut()
      .then(() => {
        toast.success("User logged out successfully");
        setMenuOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl bg-primary px-4 py-3 flex justify-between items-center border-b-2 border-primary-content">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-base-100">Volunteer</h1>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes size={24} color="base-100" style={{ border: '2px solid' }} />
            ) : (
              <FaBars size={24} color="base-100" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-base-100">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'font-bold border-b-2 border-white p-2 rounded-box'
                : ''
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive
                ? 'font-bold border-b-2 border-base-100 p-2 rounded-box'
                : ''
            }
          >
            All Volunteer Posts
          </NavLink>

          {user && (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 px-3 py-1 rounded transition duration-300 text-base-100"
              >
                My Profile <FaAngleDown className="mt-[1px]" />
              </button>

              <div
                className={`absolute mt-2 bg-base-100 shadow-md border rounded-lg w-56  transition-all  overflow-hidden ${dropdownOpen ? ' opacity-100  translate-y-7   duration-1000 ' : 'max-h-96 opacity-0 duration-1000'}`}
              >
                <NavLink
                  to="/add-post"
                  className="block px-5 py-3 hover:bg-primary-content text-sm font-semibold text-info-content"
                >
                  ➕ Add Volunteer Need Post
                </NavLink>
                <NavLink
                  to="/manage-posts"
                  className="block px-5 py-3 hover:bg-blue-100 text-sm font-semibold text-info-content"
                >
                  📋 Manage My Posts
                </NavLink>
              </div>
            </div>
          )}
        </div>

        {/* Right: Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <Link
              to="/signIn"
              className="border-2 text-base-100 px-4 py-1 rounded"
            >
              Sign In
            </Link>
          ) : (
            <>
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-base-100 cursor-pointer"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-neutral text-base-100 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="border-2 text-base-100 px-4 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden px-4 pb-4 space-y-3 bg-primary-content">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/posts" onClick={() => setMenuOpen(false)}>
            All Volunteer Posts
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-post"
                onClick={() => setMenuOpen(false)}
                className="block text-info-content"
              >
                ➕ Add Volunteer Need Post
              </NavLink>
              <NavLink
                to="/manage-posts"
                onClick={() => setMenuOpen(false)}
                className="block text-info-content"
              >
                📋 Manage My Posts
              </NavLink>
              <button
                onClick={handleLogout}
                className="w-full text-left text-red-600 font-semibold"
              >
                🔓 Logout
              </button>
            </>
          )}
          {!user && (
            <Link
              to="/signIn"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-base-100 px-4 py-2 rounded  block"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
