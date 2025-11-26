import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Emily Stone",
    role: "Chief Medical Officer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. John Carter",
    role: "Senior Pediatrician",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    name: "Dr. Sarah Mills",
    role: "Nutrition Specialist",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUsPage = () => {
  return (
    <div className="relative w-full min-h-screen text-gray-800 overflow-hidden">
      {/* Background Image with Animated Gradient Overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/about-bg.jpg')" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-500/50 via-purple-500/50 to-pink-500/50"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center text-white mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mt-10 text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We are a dedicated team of healthcare professionals committed to providing 
            exceptional care for expecting mothers and their families. Our mission is 
            to ensure safety, comfort, and expert guidance every step of the way.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Our Mission",
              text: "To provide compassionate, high-quality healthcare and guidance to mothers throughout pregnancy and beyond."
            },
            {
              title: "Our Vision",
              text: "To be the most trusted healthcare partner for expecting mothers by delivering personalized and safe care."
            },
            {
              title: "Our Values",
              text: "Compassion, expertise, integrity, and a commitment to patient-centered care guide everything we do."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow"
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

        {/* Learn More Button */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="text-center text-white mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
