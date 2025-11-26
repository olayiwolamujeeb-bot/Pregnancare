import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="w-full px-8 md:px-16 lg:px-24 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-200 rounded-tr-[100px]"></div>

          <img
            src="/Dr. Biola.png" 
            alt="Nurse"
            className="relative w-full h-100vh object-cover rounded-tr-[100px] shadow-xl"
          />
        </motion.div>

        {/* RIGHT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="leading-relaxed"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-wide">
            Why Choose <span className="text-teal-700">US</span>
          </h2>

          <ul className="space-y-6 text-[17px] text-gray-700">

            {/* LIST ITEM 1 */}
            <motion.li
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-black text-2xl mt-1">✔</span>
              <p>
                <span className="font-bold text-teal-600">
                  Expert Medical Team
                </span>{" "}
                – Highly skilled doctors, nurses, and specialists delivering
                personalized care.
              </p>
            </motion.li>

            {/* LIST ITEM 2 */}
            <motion.li
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-teal-700 text-2xl mt-1">✔</span>
              <p>
                <span className="font-bold text-teal-600">
                  Comprehensive Services
                </span>{" "}
                – From preventive care to advanced treatments.
              </p>
            </motion.li>

            {/* LIST ITEM 3 */}
            <motion.li
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-teal-700 text-2xl mt-1">✔</span>
              <p>
                <span className="font-bold text-teal-600">
                  Cutting-Edge Technology
                </span>{" "}
                – Advanced diagnostic tools and modern medical equipment.
              </p>
            </motion.li>

            {/* LIST ITEM 4 */}
            <motion.li
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-teal-700 text-2xl mt-1">✔</span>
              <p>
                <span className="font-bold text-teal-600">
                  Patient-Centered Approach
                </span>{" "}
                – Compassionate care and personalized treatment.
              </p>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
