import React, { useContext } from 'react';
// import siteLogo from '../../assets/siteLogo.png';
import { Link, NavLink } from 'react-router';
import './Header.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authentication/AuthContext';
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";

const Header = () => {

    const {user , handleLogout} = useContext(AuthContext);

    const handleSignOut = () => {
        handleLogout()
        .then(()=>{
            toast.success("You've logged out successfully" );
        })
        .catch(()=>{
        })
    }

    return (
        <div className="lg:px-30 navbar shadow-sm p-2 lg:p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-[#3D365C] text-xl font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            user && user?.email ? 
                            <>
                                <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/dashboard">Dashboard</NavLink></li>
                            </> 
                            :
                            <>
                                <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/login">Login</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/register">Register</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <Link 
                    to="/" 
                    className="lg:flex hidden items-center gap-2 text-xl lg:text-2xl font-extrabold text-[#3D365C]"
                    >
                    <FaGlobeEurope className=''></FaGlobeEurope>
                    VisaAutomated
                </Link>
                <Link 
                    to="/" 
                    className="lg:hidden flex  items-center gap-2 text-xl lg:text-2xl font-extrabold text-[#2D336B]"
                    >
                    <FaGlobeEurope className=''></FaGlobeEurope>
                    VA
                </Link>
            </div>

            {/* Large screen */}
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1  text-[#3D365C] text-xl font-bold">
                {
                    user && user?.email ? 
                    <>
                        <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/dashboard">Pricing</NavLink></li>
                    </> 
                    :
                    <>
                        <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/login">Login</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/register">Register</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/dashboard">Pricing</NavLink></li>

                    </>
                }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2 lg:gap-4 justify-center items-center">
                    {user && user?.email ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                            alt="user avatar"
                            />
                        </div>
                        </label>
                        <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                        <li>
                            <h1 className="font-bold text-xl text-[#2D336B]">
                            Hi, {user?.displayName || "User"}
                            </h1>
                        </li>
                        <li>
                            <Link className="font-bold text-sm" to="/profileSettings">Profile Settings</Link>
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
                    ) : (
                    <FaUserCircle className="hidden lg:block w-15 h-15 bg-white p-1 rounded-full" size={25} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;