import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContenxt } from "../../../Provider/AuthProvider";


const Navbar = () => {
  const { logout, user, setLoading } = useContext(AuthContenxt);
  const navigate = useNavigate()

  const handleLogout = () => {
    setLoading(true)
      logout()
      .then(()=> {
        navigate("/login");
      })
      .catch(error => {
        console.log(error);
      })
  };

  const navItems = (
    <>
      <li><NavLink to="/">Home </NavLink></li>
      <li><NavLink to="/about">About </NavLink></li>
      <li><NavLink to="/about">Item 3 </NavLink></li>
    </>
  );

    return (
      <div className="navbar bg-base-100  border-b-red-50 border-b-2 ">
        <div className="navbar-start">
          {/* mobile menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          {/* mobile menu end */}
          {/* logo */}
          <Link to="/" className="btn btn-ghost normal-case text-3xl">
            Auto Techs
          </Link>
        </div>
        {/* deskto menu start */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        {/* desktop menu end */}
        <div className="navbar-end">
          <a className="btn btn-outline btn-warning">Appoinment</a>
          {user ? (
            <button onClick={handleLogout} className="btn btn-warning ml-4" >Log Out</button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "active btn ml-4 btn-primary"
                  : " btn btn-outline ml-4 btn-primary"
              }
              // className="btn btn-outline ml-4 btn-primary "
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    );
};

export default Navbar;