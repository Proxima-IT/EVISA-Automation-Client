// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPassport, FaGlobeEurope, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="rounded-3xl m-20 min-h-screen bg-gradient-to-r from-[#FFF2F2] via-[#f6f7fb] to-[#A9B5DF] py-6 px-6 flex items-center justify-center">
      <div className="max-w-6xl text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-bold lg:text-5xl lg:font-extrabold text-[#2D336B] mb-6"
        >
          About <span className="text-[#B2A5FF]">VisaAutomated</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        >
          VisaAutomated is a platform designed to simplify the Portugal visa appointment process
          for Cape Verde residents. We automate appointment booking, slot monitoring, and
          confirmation downloads — saving applicants valuable time and effort.
        </motion.p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white shadow-xl rounded-2xl flex flex-col items-center"
          >
            <FaPassport size={50} className="text-[#2D336B] mb-4" />
            <h3 className="text-2xl font-bold text-[#2D336B] mb-2">Automated Booking</h3>
            <p className="text-gray-600">
              No more waiting and refreshing — our bot secures appointments instantly when slots
              open.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white shadow-xl rounded-2xl flex flex-col items-center"
          >
            <FaGlobeEurope size={50} className="text-[#2D336B] mb-4" />
            <h3 className="text-2xl font-bold text-[#2D336B] mb-2">Island Coverage</h3>
            <p className="text-gray-600">
              Whether you’re in Praia, Sal, or Boavista — our system dynamically checks for
              available slots.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white shadow-xl rounded-2xl flex flex-col items-center"
          >
            <FaUsers size={50} className="text-[#2D336B] mb-4" />
            <h3 className="text-2xl font-bold text-[#2D336B] mb-2">User-Friendly Dashboard</h3>
            <p className="text-gray-600">
              Manage accounts, proxies, and appointments from a simple, intuitive interface.
            </p>
          </motion.div>
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-[#2D336B] mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At VisaAutomated, our mission is to empower applicants with reliable automation,
            ensuring fairness, accessibility, and peace of mind when applying for Portugal visas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
