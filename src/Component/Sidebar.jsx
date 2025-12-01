import React from "react";
import { motion } from "framer-motion";
import {FaBaby, FaCalendarAlt, FaHeartbeat, FaUserMd, FaPrescriptionBottleAlt, FaExclamationCircle,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const base = "/dashboard";

  const menuItems = [
    { label: "Dashboard Home", icon: FaBaby, route: `${base}` },
    { label: "Appointments", icon: FaCalendarAlt, route: `${base}/appointments` },
    { label: "Clinicians", icon: FaUserMd, route: `${base}/doctors` },
    { label: "Prescriptions", icon: FaPrescriptionBottleAlt, route: `${base}/prescriptions` },
    { label: "Emergency Alerts", icon: FaExclamationCircle, route: `${base}/emergency` },
    { label: "Fetal Monitoring", icon: FaHeartbeat, route: `${base}/fetal-monitoring` },
    { label: "Messaging", icon: FaHeartbeat, route: `${base}/Chat` },
  ];

  return (
    <aside className="w-72 bg-white/70 backdrop-blur-md shadow-xl shadow-teal-800 p-2 h-screen fixed top-0 left-0 z-50 hidden md:block">
      
      {/* Brand Header */}
      <div className="mb-5 text-center mt-3">
        <h1 className="text-3xl font-extrabold text-teal-700 tracking-wide drop-shadow-sm"
          style={{ fontFamily: "Poppins, sans-serif" }}
        > LeemahCare </h1>
        <p className="text-xs tracking-widest text-teal-700 -mt-1 font-semibold font-sans">
          MATERNAL & CHILD HEALTH
        </p>
      </div>

      {/* Menu List */}
      <nav className="space-y-1">
        {menuItems.map((item, index) => {
          return (
            <motion.button
              key={index}
              onClick={() => navigate(item.route)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left 
                text-black font-medium text-sm
                transition-all duration-300 hover:bg-teal-300 hover:text-teal-700
              `}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
}
