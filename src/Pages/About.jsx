import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUsPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-50 text-gray-800">

      {/* FULL SCREEN BACKGROUND IMAGE */}
      <div className="relative w-full h-screen overflow-hidden">
        <motion.img
          src="/Mothercare.jpeg"
          alt="Leemah Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Dark Overlay (optional—remove if you want) */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Centered Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={fadeUpVariant.hidden}
            animate={fadeUpVariant.visible}
            transition={{ duration: 1 }}
          >
            About LeemahCare
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl max-w-2xl"
            initial={fadeUpVariant.hidden}
            animate={fadeUpVariant.visible}
            transition={{ duration: 1.3 }}
          >
            Providing world-class maternal and child healthcare with compassion,
            safety, and excellence.
          </motion.p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4">
            LeemahCare is dedicated to offering premium healthcare services 
            for mothers and children at every stage of their journey. 
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Our Mission",
              text: "Deliver compassionate and high-quality healthcare for mothers and children.",
            },
            {
              title: "Our Vision",
              text: "Become the most trusted family-centered healthcare provider in the region.",
            },
            {
              title: "Our Values",
              text: "Integrity, compassion, excellence, and patient-first care.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-teal-700 text-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="flex justify-center">
          <Link
            to="/Contact"
            className="px-8 py-4 bg-teal-600 text-white font-bold rounded-full shadow-lg hover:bg-teal-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
