import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGlobeAmericas, FaRobot } from "react-icons/fa";

const DashboardDefault = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="bg-[#2D336B] text-white rounded-full p-6 shadow-lg mb-6"
      >
        <FaRobot size={60} />
      </motion.div>

      {/* Welcome Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#1d224f] text-center"
      >
        Welcome to <span className="text-[#1d224f]">Dashboard</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-lg text-gray-600 text-center max-w-xl"
      >
        Simplify your visa appointment process with automated checks, proxy
        management, and smart scheduling — all in one place.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex gap-4"
      >
      </motion.div>
    </div>
  );
};

export default DashboardDefault;

