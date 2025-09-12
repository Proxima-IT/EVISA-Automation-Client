import React from "react";
import { NavLink } from "react-router";

const Sidenav = () => {
  return (
    <div>
      {/* Navigation */}
      <div className="flex-1 border border-[#00B5FF] h-[400px] p-6 shadow-xl rounded-lg text-teal-900 font-bold flex justify-center">
        <nav className=" mx-auto flex flex-col gap-3 items-start p-2 mt-5 text-lg w-full text-center">
          <NavLink
            className="block p-2 rounded-lg bg-gray-200 px-3 hover:bg-gray-300 w-full "
            to="add-client"
          >
            Add Client
          </NavLink>
          <NavLink
            className="block p-2 rounded-lg bg-gray-200 px-3 hover:bg-gray-300 w-full "
            to="manage-client"
          >
            Manage Client
          </NavLink>
         
        </nav>
      </div>
    </div>
  );
};

export default Sidenav;
