// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaGlobeEurope } from "react-icons/fa";
import { Link } from "react-router";
import { RiFlightTakeoffFill } from "react-icons/ri";
import Header from "../Header/Header";
import { useState } from "react";

export default function HeroBanner() {

 
  return (
    <div className=" bgimage ">
      <Header></Header>
      <div className="flex flex-col items-center justify-center gap-6 h-[700px] ">
        <h1 className="text-6xl font-bold font-roboto bg-gradient-to-r from-yellow-400 to-teal-400 bg-clip-text text-transparent">
          Simplifying Your eVisa Journey
        </h1>

        <p className="text-3xl font-bold text-gray-200 font-poppins">
          Automated platform to check and book Portugal eVisa appointments
          seamlessly
        </p>

        <Link to="/admin">
          <button className="group relative px-10 py-3 rounded-[12px] bg-yellow-600 flex items-center justify-center cursor-pointer overflow-hidden shadow-[0_5px_10px_rgba(0,0,0,0.103)] transition-transform duration-500 active:scale-95">
            {/* Icon Container */}
            <div className="absolute text-xl left-[-60px] rounded-full flex items-center justify-center overflow-hidden z-20 transition-transform duration-500 group-hover:translate-x-[75px] group-hover:rounded-[40px] text-white">
              <RiFlightTakeoffFill />
            </div>

            {/* Text */}
            <span className="flex items-center justify-center z-10 transition-transform duration-500 group-hover:translate-x-[8px] font-semibold  text-gray-100 text-lg font-poppins">
              Book Appointment
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
