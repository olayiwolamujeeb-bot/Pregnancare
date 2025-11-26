import React from "react";

export default function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="shadow-md bg-white rounded-xl p-6 flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm">{label}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>

      <div className={`p-4 rounded-full ${color}`}>
        <Icon size={28} />
      </div>
    </div>
  );
}
