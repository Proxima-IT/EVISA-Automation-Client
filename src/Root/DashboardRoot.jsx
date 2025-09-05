import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaHome,
  FaUser,
  FaServer,
  FaCogs,
  FaCalendarCheck,
  FaTimes,
} from "react-icons/fa";
import "./DashboardRoot.css";

const DashboardRoot = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar for small screen */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
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
          <div className="mx-2 flex-1 px-2">Dashboard</div>
        </div>

        {/* Page content */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul
          className={`menu bg-base-200 text-2xl min-h-full ${
            collapsed ? "w-20" : "w-72"
          } p-4 flex flex-col justify-between transition-all duration-300`}
        >
          {/* Collapse button only visible on large screens */}
          <div className="hidden lg:flex justify-end">
            <button
              className="btn btn-ghost btn-sm text-xl"
              onClick={() => setCollapsed(!collapsed)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Sidebar links */}
          <div className="lg:-mt-40 text-xl space-y-2">
            <li>
              <NavLink to="/" className="flex items-center gap-3">
                <FaHome />
                {!collapsed && "Home"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/profile"
                className="flex items-center gap-3"
              >
                <FaUser />
                {!collapsed && "Profile"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/proxyList"
                className="flex items-center gap-3"
              >
                <FaServer />
                {!collapsed && "Proxy List"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/automationSettings"
                className="flex items-center gap-3"
              >
                <FaCogs />
                {!collapsed && "Automation Settings"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/checkAppointment"
                className="flex items-center gap-3"
              >
                <FaCalendarCheck />
                {!collapsed && "Check Appointment"}
              </NavLink>
            </li>
          </div>

          {/* Footer brand */}
          <div className="flex justify-center items-center gap-2">
            {!collapsed && (
              <h1 className="text-2xl text-[#080c3b] font-extrabold text-center">
                VisaAutomated
              </h1>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardRoot;
