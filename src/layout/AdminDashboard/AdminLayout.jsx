import React from "react";
import { Outlet } from "react-router";
import Sidenav from "./Components/Sidenav";

const AdminLayout = () => {
  const hours = new Date().getHours();
  let greeting = "";

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <div className="min-h-[500px] mt-20 flex gap-5 mx-auto w-full px-5">
      <div className="w-3/12 mt-10">
        <Sidenav></Sidenav>
      </div>
      <div className="w-9/12">
        <div className=" w-1/3 text-center mx-auto rounded-lg  text-[10px] lg:text-[16px] font-bold bg-amber-300 text-black my-[15px] p-3">
          {greeting}, <strong> Admin 👋</strong>
        </div>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
