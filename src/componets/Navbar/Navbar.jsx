// // import { useContext, useState } from "react";
// // import { AuthContext } from "../../pages/Provider/AuthContext";
// // import { toast } from "react-toastify";
// // import { FaBars, FaAngleDown } from "react-icons/fa";
// // import { Link, NavLink, useNavigate } from "react-router";

// // const Navbar = () => {
// //   const { user, logOut } = useContext(AuthContext);
// //   const navigate = useNavigate();
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// //   const handleLogout = () => {
// //     logOut()
// //       .then(() => {
// //         toast.success("User logged out successfully");
// //         navigate("/login");
// //       })
// //       .catch((error) => console.error(error));
// //   };

// //   const navLinkClass = ({ isActive }) =>
// //     isActive
// //       ? "text-blue-600 font-semibold"
// //       : "text-gray-700 hover:text-blue-600 transition";

// //   return (
// //     <nav className="bg-white shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
// //         {/* Left: Logo */}
// //         <Link to="/" className="text-xl md:text-2xl font-bold text-blue-700">
// //           VolunteerHub
// //         </Link>

// //         {/* Center: Nav Links */}
// //         <div className="hidden md:flex gap-6 items-center">
// //           <NavLink to="/" className={navLinkClass}>
// //             Home
// //           </NavLink>
// //           <NavLink to="/posts" className={navLinkClass}>
// //             All Volunteer Posts
// //           </NavLink>

// //           {/* My Profile Dropdown */}
// //           {user && (
// //             <div
// //               className="relative"
// //               onMouseEnter={() => setIsDropdownOpen(true)}
// //               onMouseLeave={() => setIsDropdownOpen(false)}
// //             >
// //               <button className="flex items-center gap-1 px-3 py-1 text-gray-700 hover:text-blue-600 font-medium">
// //                 My Profile <FaAngleDown />
// //               </button>
// //               <div
// //                 className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border shadow rounded overflow-hidden transition-all duration-300 ease-in-out ${
// //                   isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
// //                 }`}
// //               >
// //                 <NavLink
// //                   to="/add-post"
// //                   className="block px-5 py-2 text-sm text-blue-700 font-semibold hover:bg-blue-100"
// //                 >
// //                   ➕ Add Volunteer Need Post
// //                 </NavLink>
// //                 <NavLink
// //                   to="/manage-posts"
// //                   className="block px-5 py-2 text-sm text-blue-700 font-semibold hover:bg-blue-100"
// //                 >
// //                   🗂 Manage My Posts
// //                 </NavLink>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Right: Auth Buttons */}
// //         <div className="flex items-center gap-3">
// //           {!user ? (
// //             <NavLink
// //              to='/signIn'
// //               className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition"
// //             >
// //               Sign In
// //             </NavLink>
// //           ) : (
// //             <>
// //               <div className="relative group">
// //                 <img
// //                   src={user.photoURL}
// //                   alt="User"
// //                   className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
// //                 />
// //                 <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
// //                   {user.displayName}
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={handleLogout}
// //                 className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           )}

// //           {/* Hamburger for small screens */}
// //           <button
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             className="md:hidden text-xl text-blue-700"
// //           >
// //             <FaBars />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-blue-600">
// //           <NavLink to="/" className='text-white font-bold'>
// //             Home
// //           </NavLink>
// //           <NavLink to="/posts" className='text-white font-bold'>
// //             All Volunteer Posts
// //           </NavLink>

// //           {user && (
// //             <div className="space-y-1">
// //               <hr />
// //               <p className="text-gray-500 text-sm font-semibold">My Profile</p>
// //               <NavLink
// //                 to="/add-post"
// //                 className="block text-blue-600 hover:bg-blue-100 px-3 py-1 rounded"
// //               >
// //                 ➕ Add Volunteer Need Post
// //               </NavLink>
// //               <NavLink
// //                 to="/manage-posts"
// //                 className="block text-blue-600 hover:bg-blue-100 px-3 py-1 rounded"
// //               >
// //                 🗂 Manage My Posts
// //               </NavLink>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;



// // update navbar
// // import { useContext } from "react";

// // import { AuthContext } from "../../pages/Provider/AuthContext";
// // import { toast } from "react-toastify";
// // import { FaAngleDown } from "react-icons/fa";
// // import { Link, NavLink } from "react-router";

// // const Navbar = () => {
// //   const { user, logOut } = useContext(AuthContext);

// //   const handleLogout = async () => {
// //     logOut()
// //       .then(() => {
// //         toast.success("User logged out successfully");
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };

// //   const navLinkStyles = ({ isActive }) =>
// //     isActive ? "text-blue-600 font-semibold" : "text-gray-700";

// //   return (
// //     <div className="bg-white shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
// //         {/* Left: Project Name */}
// //         <Link to="/" className="text-2xl font-bold text-blue-600">
// //           VolunteerHub
// //         </Link>

// //         {/* Center: Navigation */}
// //         <div className="hidden md:flex items-center gap-6">
// //           <NavLink to="/" className={navLinkStyles}>
// //             Home
// //           </NavLink>
// //           <NavLink to="/posts" className={navLinkStyles}>
// //             All Volunteer Posts
// //           </NavLink>

// //           {user && (
// //             <div className="relative group">
// //               {/* Dropdown trigger */}
// //               <button className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition duration-300">
// //                 My Profile <FaAngleDown className="mt-[1px]" />
// //               </button>

// //               {/* Dropdown menu */}
// //               <div
// //                 className="absolute top-full mt-2 bg-white shadow-md border rounded-lg w-56 overflow-hidden z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0"
// //               >
// //                 <NavLink
// //                   to="/add-post"
// //                   className="block px-5 py-3 hover:bg-blue-100 text-sm font-semibold text-gray-700"
// //                 >
// //                   ➕ Add Volunteer Need Post
// //                 </NavLink>
// //                 <NavLink
// //                   to="/manage-posts"
// //                   className="block px-5 py-3 hover:bg-blue-100 text-sm font-semibold text-gray-700"
// //                 >
// //                   📋 Manage My Posts
// //                 </NavLink>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Right: Auth Options */}
// //         <div className="flex items-center gap-4">
// //           {!user ? (
// //             <Link
// //               to="/signIn"
// //               className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
// //             >
// //               Sign In
// //             </Link>
// //           ) : (
// //             <>
// //               <div className="relative group">
// //                 <img
// //                   src={user.photoURL}
// //                   alt="User"
// //                   className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
// //                 />
// //                 <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
// //                   {user.displayName}
// //                 </div>
// //               </div>

// //               <button
// //                 onClick={handleLogout}
// //                 className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// // last update code

// import { useContext, useState } from "react";
// import { AuthContext } from "../../pages/Provider/AuthContext";
// import { toast } from "react-toastify";
// import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
// import { Link, NavLink } from "react-router";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = async () => {
//     logOut()
//       .then(() => {
//         toast.success("User logged out successfully");
//         setMenuOpen(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

  

//   return (
//     <nav className=" shadow-2xl sticky top-0 z-50 ">
//       <div className="max-w-7xl bg-blue-800 px-4 py-3 flex justify-between items-center  border-b-2  border-blue-100">
//         {/* Left: Logo/Name */}
//         <h1 className=" text-2xl font-bold text-white">
//           Volunteer
//         </h1>

//         {/* Mobile menu icon */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes size={24} color="white" style={{border:'2px solid'}}/> : <FaBars size={24} color="white"/>}
//           </button>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6 text-white">
//           <NavLink to="/" className={({isActive})=>(isActive?'font-bold border-b-2 border-white p-2 rounded-box' :' ')}>
//             Home
//           </NavLink>
//           <NavLink to="/posts" className={({isActive})=>(isActive?'font-bold border-b-2 border-white p-2 rounded-box' :'')}>
//             All Volunteer Posts
//           </NavLink>

//           {user && (
//             <div className="relative group">
            
//                 <NavLink className="flex items-center gap-1">
//                 My Profile <FaAngleDown className="mt-[1px]" />
//               </NavLink>
           
//               <div
//                 className="absolute mt-6 bg-white shadow-md border rounded-lg w-56 overflow-hidden  opacity-0 group-hover:opacity-100 transition-all duration-300  "
//               >
//                 <NavLink
//                   to="/add-post"
//                   className="block px-5 py-3 hover:bg-blue-100 text-sm font-semibold text-gray-700"
//                 >
//                   ➕ Add Volunteer Need Post
//                 </NavLink>
//                 <NavLink
//                   to="/manage-posts"
//                   className="block px-5 py-3 hover:bg-blue-100 text-sm font-semibold text-gray-700"
//                 >
//                   📋 Manage My Posts
//                 </NavLink>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Right: Desktop Auth */}
//         <div className="hidden md:flex items-center gap-4">
//           {!user ? (
//             <Link
//               to="/signIn"
//               className="border-2 text-white px-4 py-1 rounded"
//             >
//               Sign In
//             </Link>
//           ) : (
//             <>
//               <div className="relative group">
//                 <img
//                   src={user.photoURL}
//                   alt="User"
//                   className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//                 />
//                 <div className="absolute left-1/2 transform -translate-x-7  mt-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
//                   {user.displayName}
//                 </div>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="border-2 text-white px-4 py-1 rounded "
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="flex flex-col md:hidden px-4 pb-4 space-y-3">
//           <NavLink to="/" onClick={() => setMenuOpen(false)} >
//             Home
//           </NavLink>
//           <NavLink to="/posts" onClick={() => setMenuOpen(false)} >
//             All Volunteer Posts
//           </NavLink>
//           {user && (
//             <>
//               <NavLink
//                 to="/add-post"
//                 onClick={() => setMenuOpen(false)}
//                 className="block text-gray-700"
//               >
//                 ➕ Add Volunteer Need Post
//               </NavLink>
//               <NavLink
//                 to="/manage-post"
//                 onClick={() => setMenuOpen(false)}
//                 className="block text-gray-700"
//               >
//                 📋 Manage My Posts
//               </NavLink>
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-left text-red-600 font-semibold"
//               >
//                 🔓 Logout
//               </button>
//             </>
//           )}
//           {!user && (
//             <Link
//               to="/signIn"
//               onClick={() => setMenuOpen(false)}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition block"
//             >
//               Sign In
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../pages/Provider/AuthContext";
import { toast } from "react-toastify";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl bg-blue-800 px-4 py-3 flex justify-between items-center border-b-2 border-blue-100">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-white">Volunteer</h1>

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
        <div className="hidden md:flex items-center gap-6 text-white">
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
                ? 'font-bold border-b-2 border-white p-2 rounded-box'
                : ''
            }
          >
            All Volunteer Posts
          </NavLink>

          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 px-3 py-1  rounded  transition duration-300 text-white"
              >
                My Profile <FaAngleDown className="mt-[1px]" />
              </button>

              {dropdownOpen && (
                <div className="absolute mt-2 bg-white shadow-md border rounded-lg w-56 ">
                  <NavLink
                    to="/add-post"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 hover:bg-blue-100 text-sm font-semibold text-gray-700"
                  >
                    ➕ Add Volunteer Need Post
                  </NavLink>
                  <NavLink
                    to="/manage-posts"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 hover:bg-blue-100 text-sm font-semibold text-gray-700"
                  >
                    📋 Manage My Posts
                  </NavLink>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <Link
              to="/signIn"
              className="border-2 text-white px-4 py-1 rounded"
            >
              Sign In
            </Link>
          ) : (
            <>
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="border-2 text-white px-4 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden px-4 pb-4 space-y-3 bg-blue-100">
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
                className="block text-gray-700"
              >
                ➕ Add Volunteer Need Post
              </NavLink>
              <NavLink
                to="/manage-posts"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700"
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
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition block"
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
