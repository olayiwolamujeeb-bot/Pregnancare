import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Prescription() {
    const prescriptions = [
    {
      id: 1,
      medicine: "Folic Acid",
      dosage: "500mg",
      frequency: "2x daily",
      date: "2025-10-23",
      time: "08:30 AM",
      doctor: "Dr. Faridah",
    },
    {
      id: 2,
      medicine: "Acetyl Salicyclic Acid",
      dosage: "250mg",
      frequency: "3x daily",
      date: "2025-11-16",
      time: "08:45 AM",
      doctor: "Dr. Opeyemi",
    },
    {
      id: 3,
      medicine: "Iron Supplement",
      dosage: "1 tablet",
      frequency: "1x daily",
      date: "2025-11-26",
      time: "09:00 AM",
      doctor: "Dr. Deborah",
    },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 md:ml-72">
        <TopBar />

        <div className="p-6 mt-20">
          {/* Header */}
          <h1 className="text-3xl font-bold text-teal-600 mb-6">
            Prescription
          </h1>

          {/* Patient Info */}
          <div className="bg-white p-5 rounded shadow mb-6">
            <h2 className="text-xl font-semibold text-black mb-2">
              Patient Information
            </h2>
            <p className="text-teal-600 text-3xl font-bold mb-1"></p>
              Name: <span className="font-medium text-1xl">Aisha Bello</span>
            <p className="text-black font-semibold">
              Age: <span className="font-medium">28</span>
            </p>
            <p className="text-black font-semibold">
              Hospital Number: <span className="font-medium">PT-02345</span>
            </p>
          </div>

          {/* Prescription List */}
          <div className="bg-white p-5 rounded shadow">
            <h2 className="text-xl font-semibold text-black mb-4">
              Medication List
            </h2>

            <ul className="space-y-3">
              {prescriptions.map((item) => (
                <li
                  key={item.id}
                  className="p-4 border rounded flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-black">{item.medicine}</p>
                    <p className="text-sm text-black">
                      {item.dosage} — {item.frequency}
                    </p>
                    <p className="text-xs text-black mt-1">
                      {item.date} | {item.time}</p>
                      <p className="font-medium text-black">{item.doctor}</p>
                      Prescribed by: <span className="font-medium">{item.doctor}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
