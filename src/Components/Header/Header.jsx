import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authentication/AuthContext';
import { FiLogOut } from "react-icons/fi";
import { FaGlobeEurope } from "react-icons/fa";
import defaultPic from '../../assets/defaultUserIcon.jpg' 
import { ThemeContext } from '../../Context/ThemeContext';


const Header = () => {

    const {user , handleLogout} = useContext(AuthContext);

    const { theme, toggleTheme } = useContext(ThemeContext);

    // console.log(theme)

    const handleSignOut = () => {
        handleLogout()
        .then(()=>{
            toast.success("You've logged out successfully" );
        })
        .catch(()=>{
        })
    }

    return (
        <div className="lg:px-10 navbar shadow-sm p-2 lg:p-5 bg-[#1a3c4c] dark:bg-amber-50 fixed z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        {/* <img className="w-5 h-5 bg-none" src={hamburger} alt="" /> */}
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-[#1a3c4c] text-xl font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            user && user?.email ? 
                            <>
                                <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/pricing">Pricing</NavLink></li>

                            </> 
                            :
                            <>
                                <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                                <li className='navLinks lg:ml-10 '><NavLink to="/login">Login</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/register">Register</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <Link 
                    to="/" 
                    className=" lg:flex hidden items-center gap-2 text-xl lg:text-2xl font-bold text-yellow-50 dark:text-[#1a3c4c]"
                    >
                    <FaGlobeEurope className=''></FaGlobeEurope>
                    EVISA APPOINTMENTS
                    {/* <h1 className='text-black'>{theme}</h1> */}
                </Link>
                <Link 
                    to="/" 
                    className="italic lg:hidden flex  items-center gap-2 text-xl lg:text-2xl font-extrabold text-yellow-50 dark:text-[#1a3c4c]"
                    >
                    <FaGlobeEurope className=''></FaGlobeEurope>
                    EA
                </Link>
            </div>

            {/* Large screen */}
            <div className="ml-20 navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1  text-yellow-50 dark:text-[#1a3c4c] text-xl font-bold">
                {
                    user && user?.email ? 
                    <>
                        <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/pricing">Pricing</NavLink></li>
                    </> 
                    :
                    <>
                        <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/login">Login</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/register">Register</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/pricing">Pricing</NavLink></li>
                    </>
                }
                </ul>
            </div>
            <div className="navbar-end">
                 <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded cursor-pointer">
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
                <div className="flex gap-2 lg:gap-4 justify-center items-center ">
                    {user && user?.email ? (
                    <div className="dropdown dropdown-end">

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                            src={user?.photoURL}
                            alt="user avatar"
                            />
                        </div>
                        </label>
                        <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                        >
                        <li>
                            <h1 className="font-bold text-xl text-[#2D336B]">
                            Hi, {user?.displayName || "User"}
                            </h1>
                        </li>
                        <li>
                            <Link className="font-bold text-sm text-[#2D336B]" to="/profileSettings">Profile Settings</Link>
                        </li>
                        <li>
                            <button
                            onClick={handleSignOut}
                            className="flex items-center gap-2 text-red-600"
                            >
                            <FiLogOut size={18} /> Logout
                            </button>
                        </li>
                        </ul>
                    </div>
                    ) : 
                    (
                        <img className="hidden lg:block w-10 h-10 bg-black rounded-full"src={defaultPic}/>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;