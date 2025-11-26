import React, { useEffect } from "react";
import { FaArrowRight, FaStethoscope, FaHeartbeat, FaUserMd, FaBaby, FaTooth, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import TeamGrid from "./TeamGrid";
import Contact from "../Pages/Contact";
import WhyChooseUs from "./WhyChoose";
import WhatWeOffer from "./Services";
import LatestNews from "./Blog";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFeatures = [
    {
      icon: <FaStethoscope className="text-6xl mb-3 text-white" />,
      title: "Emergency Care",
      text: "24/7 access to urgent and critical medical services.",
    },
    {
      icon: <FaHeartbeat className="text-6xl mb-3 text-white" />,
      title: "Maternal Support",
      text: "Comprehensive care before, during & after pregnancy.",
    },
    {
      icon: <FaUserMd className="text-6xl mb-3 text-white" />,
      title: "Qualified Doctors",
      text: "Highly trained specialists across multiple fields.",
    },
    {
      icon: <FaBaby className="text-6xl mb-3 text-white" />,
      title: "Child Wellness",
      text: "Dedicated pediatric and neonatal services.",
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[150vh] md:h-[120vh] flex items-center justify-center overflow-hidden">
        {/* Background slideshow */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/Mothercare.jpeg"
            className="absolute w-full h-full object-cover animate-slideImage1"
            alt="Mothercare"
          />
          <img
            src="/Delivery.jpeg"
            className="absolute w-full h-full object-cover animate-slideImage2"
            alt="Delivery"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <div className="relative z-30 text-center px-6 max-w-3xl animate-fadeInUp mt-28 md:mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            Modern Healthcare,
            <span className="text-teal-300"> Delivered With Excellence</span>
          </h1>
          <p className="mt-4 text-lg text-gray-100 leading-relaxed">
            Providing safe, compassionate, and innovative maternal & family healthcare.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/login">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-7 py-3 rounded-full shadow-md flex items-center gap-2 transition">
                Book Appointment <FaArrowRight />
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-white text-white hover:bg-white hover:text-teal-700 px-7 py-3 rounded-full transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK MEDICAL FEATURES */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 -mt-20 relative z-10 mb-20">
        {quickFeatures.map((card, index) => (
          <div
            key={index}
            className="bg-teal-700 p-6 rounded-xl text-center shadow-md hover:scale-105 transition text-white"
          >
            {card.icon}
            <h3 className="text-xl font-bold mt-2">{card.title}</h3>
            <p className="text-sm opacity-90 mt-1">{card.text}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <WhatWeOffer />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* LATEST NEWS */}
      <LatestNews />

      {/* TEAM GRID */}
      <TeamGrid />

      {/* CONTACT SECTION */}
      <Contact />

    </div>
  );
};

export default Hero;
