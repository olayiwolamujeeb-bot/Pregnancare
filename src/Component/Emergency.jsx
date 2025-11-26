import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Emergency() {
  const drivers = [
    { id: 1, name: "Mr. John Matthew", phone: "+234 801 234 5678" },
    { id: 2, name: "Mr. Samuel Ojo", phone: "+234 802 998 1122" },
    { id: 3, name: "Mr. Lemuel Daniel", phone: "+234 803 556 7890" },
    { id: 4, name: "Mr. Hassan Hassan", phone: "+234 804 765 3322" },
  ];

  return (
    <div className="mt-10 flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 ml-0 md:ml-72 p-4">
        {/* TopBar */}
        <TopBar />

        <div className="mt-6 p-2">
          {/* Header */}
          <h1 className="text-3xl font-bold text-teal-800 mb-4">
            Emergency Dispatch
          </h1>

          {/* Image Section */}
          <div className="w-full h-100 bg-gray-200 rounded-lg overflow-hidden mb-6">
            <img
              src="/Ambu.jpg"
              className="w-full h-full object-cover"
              alt="Emergency"
            />
          </div>

          {/* Driver Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {drivers.map((d) => (
              <div
                key={d.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h2 className="text-lg font-bold text-teal-700">
                  {d.name}
                </h2>
                <p className="text-black text-semibold text-sm mt-1">Driver</p>

                <div className="mt-3">
                  <p className="text-gray-700 font-medium">📞 {d.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
