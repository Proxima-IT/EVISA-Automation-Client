import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaGlobe, FaStar } from "react-icons/fa";

const HappyCustomers = () => {
  return (
    <div className="w-full py-5">
      <h2 className="text-2xl md:text-5xl text-center font-bold mb-12 text-black dark:text-white">
        😊 Our Happy <span className="text-teal-800 dark:text-teal-300">Customers</span>
      </h2>

      <div
        data-aos="fade-up-top"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl p-4 mx-auto"
      >
        {/* Customers */}
        <div className="flex flex-col items-center bg-white dark:bg-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaUsers className="text-purple-600 dark:text-black text-5xl mb-3" />
          <h3 className="text-4xl font-bold text-gray-800 dark:text-black">
            <CountUp end={5000} duration={3} separator="," />+
          </h3>
          <p className="mt-2 text-gray-600 dark:text-black">Happy Customers</p>
        </div>

        {/* Countries */}
        <div className="flex flex-col items-center bg-white dark:bg-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaGlobe className="text-green-600 dark:text-black text-5xl mb-3" />
          <h3 className="text-4xl font-bold text-gray-800 dark:text-black">
            <CountUp end={50} duration={3} />+
          </h3>
          <p className="mt-2 text-gray-600 dark:text-black">Countries Served</p>
        </div>

        {/* Reviews */}
        <div className="flex flex-col items-center bg-white dark:bg-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaStar className="text-yellow-500 dark:text-black text-5xl mb-3" />
          <h3 className="text-4xl font-bold text-gray-800 dark:text-black">
            <CountUp end={1200} duration={3} separator="," />+
          </h3>
          <p className="mt-2 text-gray-600 dark:text-black">5-Star Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
