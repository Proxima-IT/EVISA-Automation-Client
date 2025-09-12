import React from "react";
// import siteLogo from '../../assets/siteLogo.png';
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { RiMessage3Fill } from "react-icons/ri";
import { FaGlobeEurope } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 dark:bg-amber-50 text-yellow-50 dark:text-[#1a3c4c] py-10 px-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold text-white dark:text-[#1a3c4c]">
            <FaGlobeEurope className="text-blue-400" />
            VisaAutomated
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-8 text-sm font-medium">
            <Link to="/aboutUs" className="hover:text-blue-400 transition">
              About Us
            </Link>
            <Link to="/pricing" className="hover:text-blue-400 transition">
              Pricing
            </Link>
            <Link
              to="/profileSettings"
              className="hover:text-blue-400 transition"
            >
              Profile
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Link
              to="https://x.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <BsTwitterX size={22} />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <ImFacebook2 size={22} />
            </Link>
            <Link
              to="https://www.instagram.com/nushrath_momita/"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <ImInstagram size={22} />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <RiMessage3Fill size={24} />
            </Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 dark:border-gray-300 mt-8 pt-6 text-center text-sm text-gray-100 dark:text-gray-600">
          &copy; {new Date().getFullYear()} VisaAutomated — All Rights
          Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
