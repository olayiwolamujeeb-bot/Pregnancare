import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Footer from "./Pages/Footer";
import PregnantDashboard from "./Pages/PregnantDashboard";
import DoctorsGrid from "./Component/Doctors";
import ChatBox from "./Component/Chatbox";
import AboutUsPage from "./Pages/About";
import Appointments from "./Component/Appointment";
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import Clinicians from "./Component/Doctors";
import FetalMonitoring from "./Component/FoetalMonitoring";
import EmergencyAlerts from "./Component/Emergency";
import AppointmentPage from "./Component/Appointment";
import Chat from "./Component/Chatbox";
import Prescription from "./Component/Prescription";
import ChatPage from "./Component/Doctorchat";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PregnantDashboard />} />
        <Route path="/dashboard/doctors" element={<DoctorsGrid />} />
        <Route path="/chat/:doctorId" element={<ChatBox />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/dashboard/appointment" element={<Appointments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/News" element={<News />} />
        <Route path="/dashboard/clinicians" element={<Clinicians />} />
        <Route path="/dashboard/fetal-monitoring" element={<FetalMonitoring />} />
        <Route path="/dashboard/emergency" element={<EmergencyAlerts />} />
        <Route path="/dashboard/appointments" element={<AppointmentPage />} />
        <Route path="/dashboard/chat" element={<Chat />} />
        <Route path="/dashboard/prescriptions" element={<Prescription />} />
        <Route path="/DoctorChat" element={<ChatPage />} />
      </Routes>
      <Footer />
    </>
  );
};


export default App;
