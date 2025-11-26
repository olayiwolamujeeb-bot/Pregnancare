import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; 
import TopBar from './TopBar';   
import { FaEdit, FaTrash, FaUserMd, FaCalendarAlt } from 'react-icons/fa';

const DOCTORS = {
  "1": "Dr. Faridah",
  "2": "Dr. Deborah",
  "3": "Dr. Emmanuel Opeyemi",
  "4": "Dr. Aisha Bello",
  "5": "Dr. Grace Nwankwo",
};

export default function Appointments({ patientId = "P001", pregnancyId = "PR001" }) {
  const myAppointments = [
    {
      date: "2025-11-30T10:00",
      doctor: "Dr. Faridah",
      clinicianId: "1",
      reason: "Routine check-up",
      patientId: "P001",
      pregnancyId: "PR001"
    },
    {
      date: "2025-12-02T14:30",
      doctor: "Dr. Emmanuel Opeyemi",
      clinicianId: "3",
      reason: "Ultrasound scan",
      patientId: "P001",
      pregnancyId: "PR001"
    },
    {
      date: "2025-12-05T09:00",
      doctor: "Dr. Deborah",
      clinicianId: "2",
      reason: "Follow-up consultation",
      patientId: "P002",
      pregnancyId: "PR002"
    }
  ];

  const [appointments, setAppointments] = useState(myAppointments);
  const [scheduledAt, setScheduledAt] = useState('');
  const [clinicianId, setClinicianId] = useState('');
  const [reason, setReason] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setScheduledAt('');
    setClinicianId('');
    setReason('');
    setEditingIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!scheduledAt || !clinicianId || !reason) {
      setMessage("Please fill all fields");
      return;
    }

    const newAppointment = {
      date: scheduledAt,
      doctor: DOCTORS[clinicianId],
      clinicianId,
      reason,
      patientId,
      pregnancyId
    };

    let updatedAppointments;
    if (editingIndex !== null) {
      updatedAppointments = [...appointments];
      updatedAppointments[editingIndex] = newAppointment;
      setMessage("Appointment updated");
    } else {
      updatedAppointments = [newAppointment, ...appointments];
      setMessage("Appointment added");
    }

    setAppointments(updatedAppointments);
    resetForm();
    setTimeout(() => setMessage(''), 2000);
  };

  const handleDelete = (index) => {
    if (!window.confirm("Delete this appointment?")) return;
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    setMessage("Appointment deleted");
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="flex mt-10 min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 md:ml-72">
        <TopBar />

        <main className="p-6">
          <h1 className="text-lg font-semibold font-sans text-teal-700 mb-4 italic tracking-wider">Appointments Dashboard</h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* LEFT PANEL — Booked Appointments */}
            <div className="w-full md:w-1/3 bg-gray-50 shadow-xl border p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Booked Appointments</h2>
              {appointments.length === 0 ? (
                <p className="text-gray-500 italic">No appointments booked yet.</p>
              ) : (
                <div className="space-y-3">
                  {appointments.map((appt, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow hover:-translate-y-1 transition">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{appt.doctor}</span>
                        <div className="flex gap-2">
                    <button onClick={() => handleDelete(idx)} className="text-red-600 flex items-center gap-1">
                            <FaTrash /> Delete
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <FaCalendarAlt /> {new Date(appt.date).toLocaleString()}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <FaUserMd /> Reason: {appt.reason}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT PANEL — Booking Form */}
            <div className="flex-1 bg-white shadow-xl p-6 rounded-2xl border">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {editingIndex !== null ? "Edit Appointment" : "New Appointment"}
              </h2>
              {message && <p className="text-center text-teal-700 font-medium mb-3">{message}</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Date & Time</label>
                  <input
                    type="datetime-local"
                    value={scheduledAt}
                    onChange={e => setScheduledAt(e.target.value)}
                    className="border p-3 w-full rounded-md mt-1 focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Clinician</label>
                  <select
                    value={clinicianId}
                    onChange={e => setClinicianId(e.target.value)}
                    className="border p-3 w-full rounded-md mt-1 focus:ring-2 focus:ring-teal-500"
                    required
                  >
                    <option value="">Select doctor</option>
                    {Object.entries(DOCTORS).map(([id, name]) => (
                      <option key={id} value={id}>{name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Reason</label>
                  <input
                    type="text"
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                    className="border p-3 w-full rounded-md mt-1 focus:ring-2 focus:ring-teal-500"
                    placeholder="Reason for appointment"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700 transition"
                >
                  {editingIndex !== null ? "Update Appointment" : "Book Appointment"}
                </button>

                {editingIndex !== null && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full border mt-2 p-3 rounded-md hover:bg-gray-100 transition"
                  >
                    Cancel Edit
                  </button>
                )}
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
