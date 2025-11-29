import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

export default function FetalMonitoring() {
  const [kickCount, setKickCount] = useState(0);

  // Heart rate data
  const [fhrData, setFhrData] = useState([]);

  // Delivery Date
  const [deliveryDate, setDeliveryDate] = useState("2025-08-20");
  const [daysLeft, setDaysLeft] = useState(0);

  // Calculate days left to delivery
  useEffect(() => {
    const today = new Date();
    const edd = new Date(deliveryDate);
    const diff = edd - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysLeft(days);
  }, [deliveryDate]);

  // Generate heart rate data
  useEffect(() => {
    const interval = setInterval(() => {
      setFhrData((prev) => [
        ...prev.slice(-20),
        { 
          time: new Date().toLocaleTimeString().slice(3, 8),
          fhr: 120 + Math.random() * 30
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 md:ml-72">
        <TopBar />

        <div className="p-6 mt-10">
          <h1 className="text-2xl font-bold text-teal-600">Fetal Monitoring</h1>
          <p className="text-black font-semibold italic mt-1">
            Maternal kick counting, delivery countdown and fetal heart monitoring.
          </p>

          {/* CHART */}
          <div className="mt-8 bg-white p-5 shadow-sm rounded-xl border">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Heart Rate Chart
            </h3>

            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={fhrData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={[100, 180]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="fhr"
                    stroke="teal"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* GRID SECTION */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {/* KICK COUNTER */}
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold text-slate-800">
                Kick Counter
              </h3>
              <p className="text-slate-500 mt-1">Track baby movements</p>

              <h1 className="text-6xl font-bold text-teal-700 mt-3">
                {kickCount}
              </h1>

              <button
                onClick={() => setKickCount(kickCount + 1)}
                className="mt-4 w-full py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800 transition"
              >
                Add Kick
              </button>

              <button
                onClick={() => setKickCount(0)}
                className="mt-3 w-full py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300 transition"
              >
                Reset
              </button>
            </div>

            {/* DELIVERY DAY COUNTDOWN */}
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold text-slate-800">
                Delivery Countdown
              </h3>
              <p className="text-slate-500 mt-1">Estimated Due Date (EDD)</p>

              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="mt-3 p-2 border rounded-lg w-full focus:outline-teal-600"
              />

              <h1 className="text-5xl font-bold text-teal-700 mt-5">
                {daysLeft > 0 ? `${daysLeft} Days` : "Due!"}
              </h1>

              <p className="mt-2 text-slate-500">
                {daysLeft > 0
                  ? "Your delivery day is approaching. Stay healthy!"
                  : "Congratulations 🎉 Your due date is here!"}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
