// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaGlobeEurope } from "react-icons/fa";
import { Link } from "react-router";

export default function HeroBanner() {
  return (
    <section className="mt-30 rounded-3xl relative max-w-6xl mx-auto h-[350px]  flex items-center justify-center bg-gradient-to-r from-[#A9B5DF] via-[#FFF2F2] to-[#A9B5DF] overflow-hidden">
      
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-10 right-10 text-[12rem] text-[#2D336B]"
      >
        <FaGlobeEurope />
      </motion.div>

      <div className="relative z-10 text-center px-4">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl lg:text-5xl md:text-6xl font-extrabold text-[#2D336B] drop-shadow-lg"
        >
          <FaPlaneDeparture className="inline-block mr-3 text-[#B2A5FF]" />
          VisaAutomated
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
        >
          Automate your Portugal visa appointments with speed and ease.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* <Link to="/login" className="px-8 py-3 bg-[#2D336B] text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-[#1d224f] transition">
            Get Started
          </Link> */}
          <Link to="/aboutUs" className="lg:px-8 lg:py-3 px-1 py-2 bg-white text-[#2D336B] border-2 border-[#2D336B] text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition">
            About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
