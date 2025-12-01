import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard", "/delivery", "/appointments", "/doctors", "/prescriptions", "/emergency", "/fetal-monitoring", "/mother-records");
  
  if (hideNavbar) return null;
  return (
    <header className="fixed top-2 left-0 right-0 flex justify-center z-50">
      <div
        className="bg-black/20 shadow-xl border border-white/30
                   rounded-full px-10 py-4 max-w-6xl w-full flex items-center justify-between"
      >
        {/* Logo + Brand */}
        <div className="flex items-center gap-4 h-1">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-teal-100 to-white
                          shadow-md flex items-center justify-center ring-2 ring-teal-700/50">
            <img
              src="/Logo.png"
              alt="Leemahcare Logo"
              className="h-10 w-10 object-contain"
            />
          </div>
          <h1 className="font-sans text-3xl font-extrabold text-teal-300 tracking-wide drop-shadow-sm">
            <Link to="/">LEEMAHCARE</Link>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="collapsible-icon flex items-center gap-10 text-white font-semibold">
          <Link to="/">
            <li className="hover:text-teal-600 transition duration-200 hover:scale-105">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="hover:text-teal-600 transition duration-200 hover:scale-105">
              About Us
            </li>
          </Link>
          <Link to="/news">
            <li className="hover:text-teal-600 transition duration-200 hover:scale-105">
              Health News
            </li>
          </Link>
          </ul>

        {/* Search + Socials */}
        <div className="flex items-center gap-5">
          <select
            className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm shadow-md
                       hover:bg-teal-700 transition cursor-pointer focus:outline-none"
          >
            <option>Looking for...</option>
            <option value="doctors">Doctors</option>
            <option value="services">Services</option>
            <option value="appointments">Appointments</option>
            <option value="contact">Contact</option>
          </select>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 text-teal-300">
            <FaFacebookF className="cursor-pointer hover:text-gray-900 hover:scale-110 transition" />
            <FaXTwitter  className="cursor-pointer hover:text-gray-900 hover:scale-110 transition" />
            <FaWhatsapp className="cursor-pointer hover:text-gray-900 hover:scale-110 transition" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
