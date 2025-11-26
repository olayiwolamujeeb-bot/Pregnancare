import React from 'react';
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="mt-2 bg-white relative h-[10vh] flex justify-center items-center">
        <div className="absolute inset-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10 px-4"
        >
          <h1 className="text-3xl font-bold mb-2 mt-2">Contact Us</h1>
          <p className="text-lg md:text-xl italic">
            Your health is our priority. We're here to help!   
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 py-16 max-w-7xl mx-auto">
        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-md rounded-xl p-8"
        >
          <h2 className="text-3xl font-semibold mb-6 text-teal-600">Send Us a Message</h2>
          <form className="space-y-5">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" />
            <input type="text" placeholder="Phone Number (Optional)" className="w-full p-3 border rounded-lg" />
            <select className="w-full p-3 border rounded-lg">
              <option>Subject</option>
              <option>Appointment</option>
              <option>Care Support</option>
              <option>Feedback</option>
              <option>Doctors</option>
            </select>
            <textarea rows="5" placeholder="Your Message" className="w-full p-3 border rounded-lg"></textarea>
            <button className="bg-teal-600 text-white w-full py-3 rounded-lg font-medium hover:bg-teal-700 transition">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="space-y-10"
        >
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white shadow-sm p-5 rounded-xl">
              <FaPhoneAlt className="text-teal-600 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Phone Support</h3>
                <p className="text-gray-600">‪+234 812 345 6789‬</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-md p-5 rounded-xl">
              <FaEnvelope className="text-teal-600 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Email Address</h3>
                <p className="text-gray-600">support@Leemahcare.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-md p-5 rounded-xl">
              <FaMapMarkerAlt className="text-teal-600 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Office Location</h3>
                <p className="text-gray-600">24B Olohunshogo, Ilorin, Kwara State.</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-teal-600">Working Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-3">Connect With Us</h3>
            <div className="flex gap-5 text-2xl text-teal-600">
              <FaFacebook className="hover:text-blue-700 cursor-pointer" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
