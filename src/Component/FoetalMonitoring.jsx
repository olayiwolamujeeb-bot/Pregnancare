import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,} from "recharts";

export default function FetalMonitoring() {
  const [kickCount, setKickCount] = useState(0);
  const [contractionActive, setContractionActive] = useState(false);
  const [contractionStart, setContractionStart] = useState(null);
  const [contractionDuration, setContractionDuration] = useState(0);

  
  const [fhrData, setFhrData] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setFhrData((prev) => [
        ...prev.slice(-20),
        { time: new Date().toLocaleTimeString().slice(3, 8), fhr: 120 + Math.random(20) * 3 },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  function toggleContraction() {
    if (!contractionActive) {
      setContractionStart(Date.now());
    } else {
      setContractionDuration(Math.round((Date.now() - contractionStart) / 1000));
    }
    setContractionActive(!contractionActive);
  }

  // Determine fetal heart rate status
  const latestFHR = fhrData.length ? fhrData[fhrData.length - 1].fhr : 0;
  const status =
    latestFHR < 110
      ? "Critical"
      : latestFHR > 160
      ? "Warning"
      : "Normal";

  const statusColor =
    status === "Normal"
      ? "text-green-600"
      : status === "Warning"
      ? "text-yellow-600"
      : "text-red-600";
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 md:ml-72">
        <TopBar />

        <div className="p-6 mt-10">
          <h1 className="text-2xl font-bold text-teal-600">
            Fetal Monitoring
          </h1>
          <p className="text-black font-semibold italic mt-1">
            Foetal heart rate (FHR) monitoring <br/> maternal kick counting
            to ensure baby’s well-being.
          </p>

        {/* STATUS CARD */}
          <div className="mt-6 bg-white rounded-xl p-5 shadow-sm border">
            <p className="text-black font-bold text-lg">Fetal Heart Rate Status</p>
            <h2 className={`text-3xl font-bold mt-1 ${statusColor}`}>
              {latestFHR ? `${latestFHR.toFixed(0)} bpm` : "--"}
            </h2>
            <p className={`font-medium ${statusColor}`}>{status}</p>
          </div>

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
                    stroke="teal-600" 
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* KICK COUNTER & CONTRACTIONS */}
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

            {/* CONTRACTION TIMER */}
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold text-slate-800">
                Contraction Timer
              </h3>
              <p className="text-slate-500 mt-1">Monitor contraction patterns</p>

              <h1 className="text-5xl font-bold text-slate-800 mt-3">
                {contractionActive
                  ? `${Math.round((Date.now() - contractionStart) / 1000)}s`
                  : `${contractionDuration}s`}
              </h1>

              <button
                onClick={toggleContraction}
                className={`mt-4 w-full py-2 rounded-lg text-white transition
                  ${
                    contractionActive
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-teal-700 hover:bg-teal-800"
                  }`}
              >
                {contractionActive ? "Stop Contraction" : "Start Contraction"}
              </button>

              <button
                onClick={() => {
                  setContractionDuration(0);
                  setContractionActive(false);
                }}
                className="mt-3 w-full py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300 transition"
              >
                Reset
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
