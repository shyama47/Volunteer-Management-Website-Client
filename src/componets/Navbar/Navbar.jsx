
import { useContext, useState } from "react";
import { AuthContext } from "../../pages/Provider/AuthContext";
import { toast } from "react-toastify";
import { FaAngleDown, FaBars, FaSun, FaTimes } from "react-icons/fa";
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
    <nav className="shadow-md sticky top-0 z-50">
      <div className="bg-primary px-4 py-3 flex justify-between items-center border-b-2 border-primary-content ">
        {/* Left: Logo */}
        <div className="flex gap-4 md:gap-8 items-center">
          <h1 className="text-2xl font-bold text-neutral-content">Volunteer</h1>
          <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="dark" />

  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 mt-2 fill-current text-neutral-content"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 mt-2 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
        </div>
        

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes size={24} color="white" style={{ border: '2px solid' }} />
            ) : (
              <FaBars size={24} color="white" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-neutral-content">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'font-bold border-b-2 border-neutral-content p-2 rounded-box'
                : ''
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive
                ? 'font-bold border-b-2 border-neutral-content p-2 rounded-box'
                : ''
            }
          >
            All Volunteer Posts
          </NavLink>

          {user && (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 px-3 py-1 rounded transition duration-300 text-neutral-content"
              >
                My Profile <FaAngleDown className="mt-[1px]" />
              </button>

              <div
                className={`absolute mt-2 bg-violet-50 shadow-md border rounded-lg w-56  transition-all  overflow-hidden ${dropdownOpen ? ' opacity-100  translate-y-7   duration-1000 ' : 'max-h-96 opacity-0 duration-1000'}`}
              >
                <NavLink
                  to="/add-post"
                  className="block px-5 py-3 hover:bg-primary/40 text-sm font-semibold text-info-content"
                >
                  ➕ Add Volunteer Need Post
                </NavLink>
                <NavLink
                  to="/manage-post"
                  className="block px-5 py-3 hover:bg-primary/40 text-sm font-semibold text-info-content"
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
              className="border-2 text-neutral-content px-4 py-1 rounded"
            >
              Sign In
            </Link>
          ) : (
            <>
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-neutral-content cursor-pointer"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-neutral text-neutral-content text-xs rounded px-3 py-2 opacity-0 group-hover:opacity-100 transition">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="border-2 text-neutral-content px-4 py-1 rounded cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden px-4 pb-4 space-y-3 bg-primary-content text-neutral">
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
                to="/manage-post"
                onClick={() => setMenuOpen(false)}
                className="block text-info-content"
              >
                📋 Manage My Posts
              </NavLink>
              <button
                onClick={handleLogout}
                className="w-full text-left text-secondary/90 font-semibold"
              >
                🔓 Logout
              </button>
            </>
          )}
          {!user && (
            <Link
              to="/signIn"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-neutral-content text-center px-4 py-2 rounded  block"
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
