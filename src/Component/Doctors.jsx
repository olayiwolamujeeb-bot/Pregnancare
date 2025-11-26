import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { FaStar, FaRegStar, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Faridah",
    specialty: "Obstetrician & Gynecologist",
    image: "/D1.jpg",
    rating: 4,
    online: true,
  },
  {
    id: 2,
    name: "Dr. Deborah",
    specialty: "Pediatrician",
    image: "/D2.jpg",
    rating: 5,
    online: false,
  },
  {
    id: 3,
    name: "Dr. Emmanuel Opeyemi",
    specialty: "Cardiologist",
    image: "/D3.jpg",
    rating: 4,
    online: true,
  },
  {
    id: 4,
    name: "Dr. Aisha Bello",
    specialty: "Dermatologist",
    image: "/D4.jpg",
    rating: 3,
    online: true,
  },
  {
    id: 5,
    name: "Dr. Grace Nwankwo",
    specialty: "Neurologist",
    image: "/D5.jpg",
    rating: 5,
    online: false,
  },
  {
    id: 6,
    name: "Dr. Grace Nwankwo",
    specialty: "Neurologist",
    image: "/FemaleDoc.jpg",
    rating: 5,
    online: true,
  },
];

export default function Doctors() {
  const [search, setSearch] = useState("");

  // Filter doctors by search input (name or specialty)
  const filteredDoctors = doctorsData.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-10 flex min-h-screen bg-gray-100 flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 md:ml-72">
          {/* TopBar */}
          <TopBar />

          <main className="p-6">
            <h1 className="text-3xl font-bold text-teal-700 mb-6">Our Doctors</h1>

            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold">{doctor.name}</h2>
                  <p className="text-sm text-gray-500 mb-2">{doctor.specialty}</p>

                  {/* Availability */}
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      doctor.online ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {doctor.online ? "Online" : "Offline"}
                  </span>

                  {/* Rating */}
                  <div className="flex mt-2">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < doctor.rating ? (
                        <FaStar key={i} className="text-yellow-400" />
                      ) : (
                        <FaRegStar key={i} className="text-gray-300" />
                      )
                    )}
                  </div>

                  {/* Chat Button */}
                  <Link to="/chat">
                  <button className="mt-4 flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition">
                    <FaComments /> Chat
                  </button> </Link>
                </div>
              ))}
              {filteredDoctors.length === 0 && (
                <p className="col-span-full text-gray-500 text-center">No doctors found.</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
