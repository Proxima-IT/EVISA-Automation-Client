import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./Header.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../Authentication/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { FaGlobeEurope } from "react-icons/fa";
import defaultPic from "../../assets/defaultUserIcon.jpg";
import { ThemeContext } from "../../Context/ThemeContext";

const Header = ({solid}) => {
  const { user, handleLogout } = useContext(AuthContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  // console.log(theme)

  const handleSignOut = () => {
    handleLogout()
      .then(() => {
        toast.success("You've logged out successfully");
      })
      .catch(() => {});
  };

   const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > window.innerHeight);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const location = useLocation();
  const isLoginPage = location.pathname === "/login" 
  const isSignupPage = location.pathname === "/register"

  return (
    <div className={`lg:px-10 navbar text-white shadow-md  ${scrolled || solid || isLoginPage || isSignupPage ? "bg-teal-700" : "bg-gray-800/8"} backdrop-blur-md p-2 lg:p-5 dark:bg-gray-800 dark:text-white fixed  z-30 `}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
            {/* <img className="w-5 h-5 bg-none" src={hamburger} alt="" /> */}
          </div>
          <ul
            tabIndex={0}
            className="text-[#1a3c4c] dark:text-white text-xl font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user && user?.email ? (
              <>
                <li className="navLinks">
                  <Link to="/">Home</Link>
                </li>
                <li className="navLinks lg:ml-10">
                  <NavLink to="/admin">Dashboard</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="">
                  <NavLink
                    to="/"
                    className="border border-yellow-500 rounded-md px-3 py-1"
                  >
                    Home
                  </NavLink>
                </li>
                <li className=" lg:ml-10 ">
                  <NavLink
                    to="/login"
                    className="border border-yellow-500 rounded-md px-3 py-1"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* Logo */}
       <Link to="/">
        <div className="flex items-center gap-2 text-lg lg:text-2xl font-bold text-white dark:text-[#eff4f7]">
          <FaGlobeEurope className="text-blue-400" />
          VisaAutomated
        </div>
       </Link>
       
      </div>

      {/* Large screen */}
      <div className="ml-20 navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1  text-yellow-50 dark:text-[#e2e8eb] text-xl font-bold">
          {user && user?.email ? (
            <>
              <li className="">
                <NavLink
                  to="/"
                  className="border border-yellow-500 rounded-md px-3 py-1"
                >
                  Home
                </NavLink>
              </li>
              <li className=" lg:ml-10">
                <NavLink
                  to="/admin"
                  className="border border-yellow-500 rounded-md px-3 py-1"
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className=" lg:ml-10 ">
                <NavLink
                  className="bg-white text-black px-3 py-1 rounded-md"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded cursor-pointer"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <div className="flex gap-2 lg:gap-4 justify-center items-center ">
          {user && user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="user avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-56 flex flex-col  gap-1"
              >
                <li>
                  <h1 className="font-bold text-base text-black">
                    Hi, {user?.displayName || "User"}
                  </h1>
                </li>
                <li>
                  <Link
                    className="font-bold text-lg text-blue-900"
                    to="/profileSettings"
                  >
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 text-lg text-red-700"
                  >
                    <FiLogOut size={18} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <img
              className="hidden lg:block w-10 h-10 bg-black rounded-full"
              src={defaultPic}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
