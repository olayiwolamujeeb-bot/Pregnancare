import React, { useEffect, useState } from "react";
import TopBar from "../Component/TopBar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  FaWeight,
  FaHeartbeat,
  FaCalendarAlt,
  FaUserMd,
  FaBell,
  FaCapsules,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPills,
  FaNotesMedical,
} from "react-icons/fa";

// -------------------------
// DATA
// -------------------------
const weightTrendData = [
  { week: 12, weight: 60 },
  { week: 16, weight: 61 },
  { week: 20, weight: 63 },
  { week: 24, weight: 64 },
  { week: 28, weight: 65 },
  { week: 32, weight: 66 },
  { week: 36, weight: 67 },
];

const bpTrendData = [
  { week: 12, systolic: 110, diastolic: 70 },
  { week: 16, systolic: 112, diastolic: 72 },
  { week: 20, systolic: 115, diastolic: 74 },
  { week: 24, systolic: 118, diastolic: 76 },
  { week: 28, systolic: 120, diastolic: 78 },
  { week: 32, systolic: 122, diastolic: 78 },
  { week: 36, systolic: 118, diastolic: 76 },
];

const fetalGrowthData = [
  { week: 12, size: 5 },
  { week: 16, size: 11 },
  { week: 20, size: 25 },
  { week: 24, size: 30 },
  { week: 28, size: 37 },
  { week: 32, size: 42 },
  { week: 36, size: 48 },
];

const fetalMilestones = [
  { week: 12, milestone: "Fingers and toes formed" },
  { week: 16, milestone: "Movements felt" },
  { week: 20, milestone: "Gender identifiable" },
  { week: 24, milestone: "Hearing develops" },
  { week: 28, milestone: "Sleep cycles form" },
  { week: 32, milestone: "Rapid weight gain" },
  { week: 36, milestone: "Positioning for birth" },
];

const notifications = [
  {
    type: "Appointment",
    message: "Ultrasound with Dr. Anita on 2025-12-05",
    icon: <FaUserMd className="text-white" />,
  },
  {
    type: "Medication",
    message: "Take Iron supplement today",
    icon: <FaCapsules className="text-white" />,
  },
  {
    type: "Vaccination",
    message: "Influenza vaccine scheduled 2025-11-25",
    icon: <FaBell className="text-white" />,
  },
];

const upcomingAppointments = [
  { date: "2025-12-05", type: "Ultrasound", doctor: "Dr. Anita" },
  { date: "2025-12-15", type: "Consultation", doctor: "Dr. Emmanuel" },
];

const vaccinations = [
  { date: "2025-11-25", vaccine: "Influenza" },
  { date: "2025-12-10", vaccine: "Tetanus" },
];

// -------------------------
// DASHBOARD
// -------------------------
const Dashboard = ({
  patientName = "User",
  profileImage = "/profile.jpg",
  patientAddress = "123 Main Street, Lagos, Nigeria",
  patientPhone = "+234 800 123 4567",
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar patientName={patientName} initialProfileImage={profileImage} />

      <div className="p-6 md:ml-72 pt-28 space-y-10">

        {/* GREETING */}
        <h1 className="text-4xl font-bold text-teal-700">Welcome, {patientName}</h1>
        <p className="text-gray-600 font-medium -mt-2">
          Your pregnancy health dashboard.
        </p>

        {/* PATIENT CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-6">
          <img
            src={profileImage}
            alt={patientName}
            className="w-28 h-28 rounded-full border-2 border-teal-500 object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-teal-700">{patientName}</h2>

            <p className="flex items-center gap-2 text-gray-600 mt-1">
              <FaMapMarkerAlt /> {patientAddress}
            </p>

            <p className="flex items-center gap-2 text-gray-600 mt-1">
              <FaPhoneAlt /> {patientPhone}
            </p>
          </div>
        </div>

        {/* NOTIFICATION DROPDOWN */}
        <div
          className="bg-teal-600 p-5 rounded-xl shadow-md flex items-center justify-between text-white cursor-pointer hover:bg-teal-700 transition"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <h2 className="font-semibold text-lg">Notifications</h2>
          <span className="font-bold">{showNotifications ? "Hide" : "View"}</span>
        </div>

        {showNotifications && (
          <div className="bg-white p-4 rounded-xl shadow-sm border space-y-3">
            {notifications.map((note, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 border p-3 rounded-lg hover:bg-teal-50 transition"
              >
                <div className="bg-teal-600 p-2 rounded-full shadow">
                  {note.icon}
                </div>
                <span className="font-medium">{note.message}</span>
              </div>
            ))}
          </div>
        )}

        {/* SUMMARY CARDS (NO GRADIENTS – CLEAN UI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
            <FaWeight className="text-4xl text-teal-700 mx-auto" />
            <h3 className="font-semibold text-lg mt-2 text-gray-700">Weight</h3>
            <p className="text-3xl mt-1 font-bold text-teal-700">65 kg</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
            <FaHeartbeat className="text-4xl text-teal-700 mx-auto" />
            <h3 className="font-semibold text-lg mt-2 text-gray-700">
              Heart Rate
            </h3>
            <p className="text-3xl mt-1 font-bold text-teal-700">78 bpm</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
            <FaCalendarAlt className="text-4xl text-teal-700 mx-auto" />
            <h3 className="font-semibold text-lg mt-2 text-gray-700">
              Gestational Week
            </h3>
            <p className="text-3xl mt-1 font-bold text-teal-700">28</p>
          </div>
        </div>

        {/* APPOINTMENTS */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-bold mb-4 text-teal-700 flex items-center gap-2">
            <FaUserMd /> Upcoming Appointments
          </h2>
          <ul className="space-y-2">
            {upcomingAppointments.map((appt, idx) => (
              <li
                key={idx}
                className="border p-3 rounded-lg hover:bg-teal-50 transition font-medium"
              >
                {appt.date} — {appt.type} with {appt.doctor}
              </li>
            ))}
          </ul>
        </div>

        {/* VACCINATIONS */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-bold mb-4 text-teal-700 flex items-center gap-2">
            <FaPills /> Vaccination Schedule
          </h2>

          <ul className="space-y-2">
            {vaccinations.map((v, idx) => (
              <li
                key={idx}
                className="border p-3 rounded-lg hover:bg-teal-50 transition font-medium"
              >
                {v.date} — {v.vaccine}
              </li>
            ))}
          </ul>
        </div>

        {/* FETAL GROWTH + MILESTONES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-bold mb-4 text-teal-700">
              Fetal Growth Chart
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={fetalGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="size" stroke="#0d9488" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-bold mb-4 text-teal-700">
              Fetal Milestones
            </h2>
            <ul className="space-y-2">
              {fetalMilestones.map((m, idx) => (
                <li
                  key={idx}
                  className="border p-3 rounded-lg hover:bg-teal-50 transition font-medium"
                >
                  Week {m.week}: {m.milestone}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WEIGHT + BP TRENDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-bold mb-4 text-teal-700">Weight Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weightTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#0f766e" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-bold mb-4 text-teal-700">
              Blood Pressure Trend
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={bpTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="#0f766e" name="Systolic" />
                <Line type="monotone" dataKey="diastolic" stroke="#14b8a6" name="Diastolic" />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
