import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUserMd, FaAmbulance } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 200 },
};

export default function ServicesPage() {
  return (
    <div className="w-full text-gray-800">

{/*Services*/}      
<section className="bg-teal-600 w-full h-60 flex flex-col justify-center px-10 text-white bg-cover bg-center shadow-lg"
    style={{
      backgroundImage:
            "url('/mnt/data/445979bf-ea18-4878-a518-f018cda7a0cd.png')",
        }}
      >
        <p className="text-xl opacity-90">Pages</p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold tracking-wide drop-shadow-lg"
        >
          OUR SERVICES
        </motion.h1>
      </section>

      {/* =====================================================
                2. OUR PROCESS SECTION
      ====================================================== */}
      <section
        className="w-full py-24 px-10 text-black bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/mnt/data/0024c5fc-1ae1-40a1-9ce6-561ace1ddcc3.png')",
        }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl mb-3"
          >
            How we do it?
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            OUR PROCESS
          </motion.h2>

          {/* PROCESS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">

            {/* ITEM 1 */}
            <motion.div {...hoverScale}>
              <FaHeartbeat className="text-6xl mb-4" />
              <p className="font-semibold text-lg">What we do</p>
              <h3 className="text-3xl font-extrabold mt-2">WE CARE ABOUT YOU</h3>
              <p className="mt-3 text-lg leading-relaxed">
                Your health is our priority. We provide compassionate and
                professional care at every step.
              </p>
            </motion.div>

            {/* ITEM 2 */}
            <motion.div {...hoverScale}>
              <FaUserMd className="text-6xl mb-4" />
              <p className="font-semibold text-lg">We give you</p>
              <h3 className="text-3xl font-extrabold mt-2">MEDICAL ADVICE</h3>
              <p className="mt-3 text-lg leading-relaxed">
                Expert consultations to support your health decisions with
                confidence.
              </p>
            </motion.div>

            {/* ITEM 3 */}
            <motion.div {...hoverScale}>
              <FaAmbulance className="text-6xl mb-4" />
              <p className="font-semibold text-lg">We offer professional</p>
              <h3 className="text-3xl font-extrabold mt-2">MEDICAL SERVICES</h3>
              <p className="mt-3 text-lg leading-relaxed">
                Reliable and high-quality medical services tailored to your needs.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
                3. MORE SERVICES SECTION
      ====================================================== */}
      <section className="py-24 px-10 bg-white">
        <h2 className="text-4xl font-extrabold mb-10">MORE SERVICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">

          {/* ======= CARD TEMPLATE (Reusable Pattern) ======= */}
          {[
            {
              title: "WE CARE",
              label: "What we do",
              text: "Compassionate care for patients of all ages, ensuring comfort at every visit.",
              img: "/mnt/data/48ad105f-d438-442b-9a75-5ff66561c198.png",
            },
            {
              title: "MEDICAL ADVICE",
              label: "We give you",
              text: "Professional guidance for your health and wellness journey.",
              img: "/mnt/data/2d88cca2-3431-48e5-8d22-57a906b777c5.png",
            },
            {
              title: "MEDICAL SERVICES",
              label: "We offer professional",
              text: "Complete healthcare solutions delivered with excellence.",
              img: "/mnt/data/fd18c996-3fb1-47e9-90c6-5647ed5d598a.png",
            },
            {
              title: "PROFESSIONAL",
              label: "We are",
              text: "Skilled medical experts committed to providing you with top-level service.",
              img: "/mnt/data/4dae9404-2bff-40b6-b4c6-81f9ef1f50c8.png",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              {...hoverScale}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={card.img}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="p-6">
                <p className="text-lg font-semibold text-gray-600">{card.label}</p>
                <h3 className="text-3xl font-extrabold mt-1">{card.title}</h3>
                <p className="mt-3 text-lg leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
