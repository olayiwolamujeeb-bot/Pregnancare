import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../Component/Sidebar.jsx';
import Dashboard from '../Component/Dashboard.jsx';
import Doctors from '../Component/Doctors.jsx';
import Appointments from '../Component/Appointment.jsx'; 
import Prescriptions from '../Component/Prescription.jsx';
import Symptoms from '../Component/Symptoms.jsx';
import WelcomeModal from '../Component/Welcomebar.jsx';

const PregnancyDashboard = () => {
  const navigate = useNavigate();

  const [activeView, setActiveView] = useState('weekProgress');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showWelcome, setShowWelcome] = useState(true);
  const [symptoms, setSymptoms] = useState([]);
  const [kicks, setKicks] = useState([]);
  const [symptomInput, setSymptomInput] = useState({ type: '', severity: 'mild', notes: '' });
  const [kickCount, setKickCount] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);
  const [daysToDelivery, setDaysToDelivery] = useState(0);

  const weekData = {
    currentWeek: 24,
    dueDate: "2026-03-15",
    babySize: "Cantaloupe",
    babyLength: "30 cm",
    babyWeight: "600g",
    trimester: "Second"
  };

  const vitalsHistory = [
    { week: 20, weight: 65, heartRate: 75, bloodPressure: 115 },
    { week: 21, weight: 65.5, heartRate: 76, bloodPressure: 116 },
    { week: 22, weight: 66, heartRate: 77, bloodPressure: 117 },
    { week: 23, weight: 66.5, heartRate: 77, bloodPressure: 117 },
    { week: 24, weight: 68, heartRate: 78, bloodPressure: 118 }
  ];

  const tips = [
    "Stay hydrated - drink 8-10 glasses of water daily",
    "Take prenatal vitamins with food",
    "Get 7-9 hours of sleep each night",
    "Light exercise like walking is beneficial",
    "Avoid alcohol and smoking",
    "Attend prenatal checkups regularly"
  ];

  const doctors = [
    { name: "Dr. Smith", specialization: "OB/GYN", phone: "08012345678", email: "smith@example.com" },
    { name: "Dr. Johnson", specialization: "Pediatrician", phone: "08098765432", email: "johnson@example.com" },
    { name: "Dr. Lee", specialization: "Nutritionist", phone: "08011223344", email: "lee@example.com" }
  ];

  const [appointments, setAppointments] = useState([
    { date: "2025-11-20", type: "Ultrasound", doctor: "Dr. Smith" },
    { date: "2025-12-05", type: "Checkup", doctor: "Dr. Johnson" },
    { date: "2025-12-18", type: "Blood Test", doctor: "Dr. Smith" }
  ]);

  const prescriptions = [
    { medicine: "Prenatal Vitamins", dosage: "1 tablet daily", doctor: "Dr. Faridah", date: "2025-01-20" },
    { medicine: "Iron Supplements", dosage: "1 tablet daily", doctor: "Dr. Opeyemi", date: "2025-03-25" },
    { medicine: "Calcium", dosage: "2 tablets daily", doctor: "Dr. Deborah", date: "2025-05-21" },
    { medicine: "Folic Acid", dosage: "2 tablets daily", doctor: "Dr. Emmanuel", date: "2025-06-31" },
    { medicine: "PregnanCare", dosage: "2 tablets daily", doctor: "Dr. Aishah", date: "2025-07-" },
    { medicine: "Paracetamol", dosage: "2 tablets daily", doctor: "Dr. Faruq", date: "2025-12-01" },
    { medicine: "AcetylSalicylic Acid", dosage: "2 tablets daily", doctor: "Dr. Adegbola", date: "2025-12-01" },
    { medicine: "Iron Supplements", dosage: "2 tablets daily", doctor: "Dr. Faridah", date: "2025-12-01" },
    { medicine: "Post-natal Vitamins", dosage: "2 tablets daily", doctor: "Dr. Opeyemi", date: "2025-12-01" },
  ];
  useEffect(() => {
    const today = new Date();
    const due = new Date(weekData.dueDate);
    const diffTime = due - today;
    setDaysToDelivery(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    const interval = setInterval(() => {
      setTipIndex(prev => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [weekData.dueDate]);

  // Symptom Handler
  const handleLogSymptom = () => {
    if (symptomInput.type) {
      const newSymptom = { ...symptomInput, date: new Date().toLocaleString(), id: Date.now() };
      setSymptoms([newSymptom, ...symptoms]);
      setSymptomInput({ type: '', severity: 'mild', notes: '' });
    }
  };

  // Kick Handler
  const handleLogKick = () => {
    if (kickCount > 0) {
      const newKick = { count: kickCount, time: new Date().toLocaleString(), id: Date.now() };
      setKicks([newKick, ...kicks]);
      setKickCount(0);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <WelcomeModal showWelcome={showWelcome} setShowWelcome={setShowWelcome} />
        <div className="flex gap-6">
          <Sidebar setActiveView={setActiveView} />
          <div className="flex-1 space-y-6 relative">

            {/* WEEK PROGRESS */}
            {activeView === 'weekProgress' && (
              <Dashboard
                weekData={weekData}
                vitalsHistory={vitalsHistory}
                tips={tips}
                tipIndex={tipIndex}
                kicks={kicks}
              />
            )}

            {/* DOCTORS */}
            {activeView === 'doctors' && <Doctors doctors={doctors} />}

            {/* APPOINTMENTS — FULLY WORKING */}
            {activeView === 'appointments' && (
              <Appointments
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                appointments={appointments}
                setAppointments={setAppointments} 
              />
            )}

            {/* PRESCRIPTIONS */}
            <div className="mt-4 mb-0 absolute top-4 right-4 text-gray-600 italic"/>
            {activeView === 'prescriptions' &&
            <Prescriptions prescriptions={prescriptions} />
            }

            {/* SYMPTOMS */}
            {activeView === 'symptoms' && (
              <Symptoms
                symptoms={symptoms}
                symptomInput={symptomInput}
                setSymptomInput={setSymptomInput}
                handleLogSymptom={handleLogSymptom}
              />
            )}

            {/* KICK TRACKER */}
            {activeView === 'kicks' && (
              <KickTracker
                kicks={kicks}
                kickCount={kickCount}
                setKickCount={setKickCount}
                handleLogKick={handleLogKick}
              />
          )}
            {/* DELIVERY */}
          {activeView === 'delivery' && (
          <Delivery dueDate={weekData.dueDate} />
           )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancyDashboard;
