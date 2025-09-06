import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaGlobe, FaStar } from "react-icons/fa";

const HappyCustomers = () => {
  return (
    <div className="w-full py-16">
      <h2 className="text-4xl font-bold text-gray-700 dark:text-amber-50 text-center mb-10">
        😊 Our Happy Customers
      </h2>
      <div data-aos="fade-up-top" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        {/* Customers */}
        <div className="flex flex-col items-center bg-white dark:bg-[#78b4cf35] shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaUsers className="text-purple-600 dark:text-white text-5xl mb-3" />
          <h3 className="text-4xl font-bold text-gray-800 dark:text-white">
            <CountUp end={5000} duration={3} separator="," />+
          </h3>
          <p className="mt-2 text-gray-600 dark:text-white">Happy Customers</p>
        </div>

        {/* Countries */}
        <div className="flex flex-col items-center bg-white dark:bg-[#78b4cf35] shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaGlobe className="text-green-600 dark:text-white text-5xl mb-3" />
          <h3 className="text-4xl font-bold text-gray-800 dark:text-white">
            <CountUp end={50} duration={3} />+
          </h3>
          <p className="mt-2 text-gray-600 dark:text-white">Countries Served</p>
        </div>

        {/* Reviews */}
        <div className="flex flex-col items-center bg-white dark:bg-[#78b4cf35] shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaStar className="text-yellow-500 dark:text-white text-5xl mb-3" />
          <h3 className="text-4xl font-bold text-gray-800 dark:text-white">
            <CountUp end={1200} duration={3} separator="," />+
          </h3>
          <p className="mt-2 text-gray-600 dark:text-white">5-Star Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
