import React from "react";
import { Outlet } from "react-router";
import Sidenav from "./Components/Sidenav";
import Header from "../../Components/Header/Header";
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
    <div>
      <div className="!bg-black">
        <Header solid></Header>
      </div>
      <div className="min-h-[500px] pt-20   flex flex-col lg:flex-row gap-5 mx-auto w-full px-5">
        <div className="lg:w-3/12 w-full mt-10">
          <Sidenav></Sidenav>
        </div>
        <div className="lg:w-9/12 w-full">
          {/* <div className=" lg:w-1/3 w-full text-center mx-auto rounded-lg  text-[14px] lg:text-[16px] font-bold bg-amber-300 text-black my-[15px] p-3">
            {greeting}, <strong> Admin 👋</strong>
          </div> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
