import React from "react";
import { motion } from "framer-motion";
import { GiStethoscope, GiBabyBottle, GiHospital } from "react-icons/gi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 200 },
};

export default function WhatWeOffer() {
  return (
    <section className="w-full  bg-teal-50 py-10 px-5">

      {/*HEADER*/}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-lg text-teal-600 font-bold">What We Offer</p>
        <h2 className="text-2xl md:text-5xl font-extrabold text-teal-700 gap-y-6">
          Quality Healthcare <br/> You Can Trust
        </h2>
      </motion.div>

      {/*OFFER GRID*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

      {/* CARD 1 */}
        <motion.div
          {...hoverScale}
          className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <GiStethoscope className="text-6xl text-blue-600 mb-4" />
          <p className="text-lg text-gray-500">We Provide</p>
          <h3 className="text-3xl font-extrabold text-gray-800 mt-1">
            MEDICAL CARE
          </h3>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            Comprehensive healthcare services with compassion and professionalism.
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          {...hoverScale}
          className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <GiBabyBottle className="text-6xl text-pink-600 mb-4" />
          <p className="text-lg text-gray-500">We Support</p>
          <h3 className="text-3xl font-extrabold text-gray-800 mt-1">
            MATERNAL CARE
          </h3>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            Dedicated pregnancy and postnatal services tailored to women’s health.
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          {...hoverScale}
          className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <GiHospital className="text-6xl text-green-600 mb-4" />
          <p className="text-lg text-gray-500">We Offer</p>
          <h3 className="text-3xl font-extrabold text-gray-800 mt-1">
            HOSPITAL SERVICES
          </h3>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            Reliable medical attention with world-class healthcare facilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
