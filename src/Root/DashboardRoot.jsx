import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { 
  FaHome, FaUser, FaServer, FaCogs, FaCalendarCheck, FaTimes
} from 'react-icons/fa';
import './DashboardRoot.css';

const DashboardRoot = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar for small screen*/}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none ">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
        </div>

        {/* Page content here */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        
        <ul className="menu bg-base-200 text-2xl min-h-full w-80 p-4 flex flex-col justify-between">
            
            {/* Close button at top-right (small screens only) */}
            <div className="flex justify-end lg:hidden">
            <label
                htmlFor="my-drawer-2"
                className="btn btn-ghost btn-sm text-xl"
            >
                <FaTimes />
            </label>
            </div>

            {/* Sidebar content */}
            <div className="mt-5 text-xl">
            <li>
                <NavLink to="/">
                <FaHome className="inline-block" />
                Home
                </NavLink>
            </li>
            <li className="navLink">
                <NavLink to="/dashboard/profile">
                <FaUser className="inline-block" />
                Profile
                </NavLink>
            </li>
            <li className="navLink">
                <NavLink to="/dashboard/proxyList">
                <FaServer className="inline-block mr-2" />
                Proxy List
                </NavLink>
            </li>
            <li className="navLink">
                <NavLink to="/dashboard/automationSettings">
                <FaCogs className="inline-block mr-2" />
                Automation Settings
                </NavLink>
            </li>
            <li className="navLink">
                <NavLink to="/dashboard/checkAppointment">
                <FaCalendarCheck className="inline-block mr-2" />
                Check Appointment
                </NavLink>
            </li>
            </div>

            <div className="flex justify-center items-center gap-2">
            <h1 className="text-2xl text-[#080c3b] font-extrabold text-center">
                VisaAutomated
            </h1>
            </div>
        </ul>
        </div>

    </div>
  );
};

export default DashboardRoot;
