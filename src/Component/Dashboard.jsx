import React, { useState, useEffect } from "react";
import TopBar from "../Component/TopBar";
import Sidebar from "../Component/Sidebar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FaWeight, FaHeartbeat, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";


// Mr. Emmanuel 
const fetalHeartRateData = [
  { day: "Mon", bpm: 140 },
  { day: "Tue", bpm: 142 },
  { day: "Wed", bpm: 138 },
  { day: "Thu", bpm: 144 },
  { day: "Fri", bpm: 140 },
  { day: "Sat", bpm: 145 },
  { day: "Sun", bpm: 142 },
];

const weeklyTips = {
  12: "Stay hydrated and take your prenatal vitamins daily.",
  16: "Light exercise like walking or yoga is beneficial.",
  20: "Focus on protein intake to support fetal growth.",
  24: "Monitor weight gain and eat balanced meals.",
  28: "Third trimester begins—prepare for upcoming check-ups.",
  32: "Attend all recommended prenatal appointments.",
  36: "Practice relaxation and breathing exercises for labor.",
  40: "Get ready for delivery—stay calm and organized.",
};

const upcomingAppointments = [
  { date: "2025-12-05", type: "Ultrasound", doctor: "Dr. Habeeb" },
  { date: "2025-12-15", type: "Consultation", doctor: "Dr. Emmanuel" },
  { date: "2025-12-25", type: "Ultrasound", doctor: "Dr. Faridah" },
  { date: "2025-12-15", type: "Consultation", doctor: "Dr. Deborah" },
];

const Dashboard = ({ patientName = "User", profileImage = "/profile.jpg", week = 28 }) => {
  const [kickCount, setKickCount] = useState(0);

  // Checklist only (medicine removed)
  const [checklist, setChecklist] = useState({ Water: false, Vitamins: false, Walk: false, Rest: false });
  useEffect(() => window.scrollTo(0, 0), []);

  const toggleChecklist = (task) => setChecklist({ ...checklist, [task]: !checklist[task] });
  const trimesterProgress = Math.min(100, (week / 40) * 100);

  return (
    <div className="flex">
      <Sidebar week={week} username={patientName} />

      <div className="-mt-5 flex-1 md:ml-73 p-6 pt-28 space-y-6">
        <TopBar patientName={patientName} initialProfileImage={profileImage} />
        <h1 className="-mt-10 text-4xl font-bold text-teal-700">Welcome, {patientName}</h1>
        <p className="text-black font-medium -mt-5">Your pregnancy health dashboard.</p>

        {/* Main Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-teal-700 rounded-2xl shadow-sm p-6 text-center">
            <FaWeight className="text-4xl text-white mx-auto" />
            <h3 className="font-semibold text-lg mt-2 text-white">Weight</h3>
            <p className="text-3xl mt-1 font-bold text-white">65 kg</p>
          </div>
          <div className="bg-teal-700 rounded-2xl shadow-sm p-6 text-center">
            <FaHeartbeat className="text-4xl text-white mx-auto" />
            <h3 className="font-semibold text-lg mt-2 text-white">Heart Rate</h3>
            <p className="text-3xl mt-1 font-bold text-white">78 bpm</p>
          </div>
          <div className="bg-teal-700 rounded-2xl shadow-sm p-6 text-center">
            <FaCalendarAlt className="text-4xl text-white mx-auto" />
            <h3 className="font-semibold text-lg mt-2 text-white">Week</h3>
            <p className="text-3xl mt-1 font-bold text-white">{week}</p>
          </div>
        </div>

        {/* Top Row: Kick Counter + Checklist (medicine removed) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Kick Counter */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-teal-700 font-bold mb-2">Kick Counter</p>
            <p className="text-sm text-teal-600 mb-2">{kickCount} kicks today</p>
            <div className="flex gap-2">
              <button
                onClick={() => setKickCount(kickCount + 1)}
                className="bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-700 transition"
              >
                Add Kick
              </button>
              <button
                onClick={() => setKickCount(0)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Antenatal Checklist (only item left) */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 col-span-2">
            <p className="text-teal-700 font-bold text-sm mb-2">Antenatal Checklist</p>
            {Object.keys(checklist).map((task) => (
              <button
                key={task}
                onClick={() => toggleChecklist(task)}
                className={`flex items-center justify-between w-full px-2 py-1 mb-1 rounded text-xs font-medium 
                  ${checklist[task] ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-700"}
                  hover:bg-teal-600 hover:text-white transition`}
              >
                {task} <span>{checklist[task] ? "✓" : ""}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Weekly Pregnancy Tips */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-2xl font-bold mb-3 text-teal-700 flex items-center gap-2">
            <FaInfoCircle /> Weekly Pregnancy Tip
          </h2>
          <p className="text-black text-1xl">
            {weeklyTips[week] || "Follow your healthcare provider's guidance."}
          </p>
        </div>

        {/* Trimester Progress */}
        <div className="bg-white rounded-2xl shadow-sm shadow-teal-600 border p-6">
          <p className="text-2xl text-teal-700 font-bold mb-2">Trimester Progress</p>
          <div className="w-full bg-teal-100 h-3 rounded-full">
            <div
              className="bg-teal-600 h-3 rounded-full"
              style={{ width: `${trimesterProgress}%` }}
            />
          </div>
          <p className="text-s text-teal-600 mt-1">{Math.round(trimesterProgress)}% complete</p>
        </div>

        {/* Fetal Heartbeat */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <p className="text-teal-700 font-bold mb-2">Fetal Heartbeat</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={fetalHeartRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bpm" stroke="#0f766e" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <p className="text-teal-700 font-bold mb-2">Upcoming Appointments</p>
          {upcomingAppointments.map((appt, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-teal-100 p-2 rounded mb-2 text-xs font-medium"
            >
              <span>{appt.date} - {appt.type}</span>
              <span>{appt.doctor}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
