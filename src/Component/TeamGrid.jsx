import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaTimes } from 'react-icons/fa';

const teamData = [
  {
    id: 1,
    name: 'Dr. Johnson Moses',
    role: 'Pediatrician',
    image: '/MD2.jpg',
    bio: 'Sussie is a pediatrician with 12 years of experience focused on early childhood development and nutrition.',
    phone: '+234 800 000 0001',
    email: 'sussie@example.com',
    socials: [
      { label: 'LinkedIn', icon: FaLinkedin, href: '#' },
      { label: 'Twitter', icon: FaTwitter, href: '#' },
      { label: 'Facebook', icon: FaFacebook, href: '#' },
    ],
  },
  {
    id: 2,
    name: 'Dr. Adeola Ashiru',
    role: 'Dental Surgeon',
    image: '/MD3.jpg',
    bio: 'Ashley specializes in pediatric dentistry and gentle dental care for children.',
    phone: '+234 800 000 0002',
    email: 'ashley@example.com',
    socials: [
      { label: 'LinkedIn', icon: FaLinkedin, href: '#' },
      { label: 'Twitter', icon: FaTwitter, href: '#' },
      { label: 'Facebook', icon: FaFacebook, href: '#' },
    ],
  },
  {
    id: 3,
    name: 'Dr. Esther Makinde',
    role: 'Anaesthecian',
    image: '/MD5.jpg',
    bio: 'Gabriela focuses on minimally invasive cosmetic procedures and patient wellness.',
    phone: '+234 800 000 0003',
    email: 'gabriela@example.com',
    socials: [
      { label: 'LinkedIn', icon: FaLinkedin, href: '#' },
      { label: 'Twitter', icon: FaTwitter, href: '#' },
      { label: 'Facebook', icon: FaFacebook, href: '#' },
    ],
  },
  {
    id: 4,
    name: 'Dr. Makinde Ifedayo',
    role: 'Head Consultant',
    image: '/S4.jpg',
    bio: 'Marcus is experienced in family medicine and preventive healthcare.',
    phone: '+234 800 000 0004',
    email: 'marcus@example.com',
    socials: [
      { label: 'LinkedIn', icon: FaLinkedin, href: '#' },
      { label: 'Twitter', icon: FaTwitter, href: '#' },
      { label: 'Facebook', icon: FaFacebook, href: '#' },
    ],
  },
];
{/*Animation*/}
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  hover: { y: -6 },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Team Card (single file)
const TeamCard = ({ member, onViewProfile }) => {
  return (
    <motion.article
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
      tabIndex={0}
      aria-label={`${member.name} card`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-90 bg-gray-100 overflow-hidden">
        {/* background image */}
        <div
          className="h-90 absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${member.image})` }}
          role="img"
          aria-label={`${member.name} photo`}
        />
        {/* overlay + socials */}
        <motion.div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300"
          variants={overlayVariants}
          initial="hidden"
          whileInView="visible"
        />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm socials">
          {member.socials.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              aria-label={s.label}
              className="w-8 h-8 rounded-full flex items-center justify-center text-teal-700 text-sm shadow"
              style={{ backgroundColor: undefined }}
            >
              <s.icon />
            </a>
          ))}
        </div>
      </div>
      <div className="p-5 pt-8">
        <span className="block text-xs uppercase font-extrabold font-serif tracking-wider text-teal-700 mb-1">
          {member.role}
        </span>
        <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewProfile(member)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-600 text-white text-sm font-medium shadow hover:bg-indigo-700 transition"
          >
            View Profile
          </button>
          <a
            href={`mailto:${member.email}`}
            className="ml-2 text-sm text-gray-600 hover:text-gray-900"
            aria-label={`Email ${member.name}`}
          >
            Contact
          </a>
        </div>
      </div>
    </motion.article>
  );
};
const ProfileModal = ({ member, onClose }) => {
  if (!member) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <motion.dialog
          className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div
              className="h-64 md:h-auto md:col-span-1 bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})` }}
              aria-hidden
            />
            <div className="p-6 md:col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-teal-600 mb-4">{member.role}</p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close profile"
                  className="rounded-full p-2 hover:bg-gray-100"
                >
                  <FaTimes />
                </button>
              </div>
              <p className="text-gray-700 mb-4">{member.bio}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <h4 className="text-xs text-gray-500 uppercase">Phone</h4>
                  <p className="text-sm">{member.phone}</p>
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase">Email</h4>
                  <p className="text-sm">{member.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {member.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm hover:bg-gray-50"
                  >
                    <s.icon /> <span>{s.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => alert('Booking flow placeholder')}
                  className="px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700"
                >
                  Book Appointment
                </button>
                <button
                  onClick={onClose}
                  className="ml-3 px-4 py-2 rounded-md border hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.dialog>
      </motion.div>
    </AnimatePresence>
  );
};

const TeamGrid = () => {
const [selected, setSelected] = useState(null);
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h2 className="text-3xl text-teal-700 font-extrabold">Meet Our Team</h2>
          <p className="text-gray-600 mt-2">Experienced professionals dedicated to your care.</p>
        </header>
        <motion.div
          className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {teamData.map((m) => (
            <TeamCard key={m.id} member={m} onViewProfile={(mem) => setSelected(mem)} />
          ))}
        </motion.div>
      </div>
      {/* Modal */}
      <ProfileModal member={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default TeamGrid;
