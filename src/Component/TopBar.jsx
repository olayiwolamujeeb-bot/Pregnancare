import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const TopBar = ({
  patientName = "Patient",
  initialProfileImage = "/profile.jpg"
}) => {
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const fileInputRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 md:left-72 bg-teal-600 h-16 z-50 shadow-md flex items-center justify-between px-6">
      {/* Left - Navigation */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-white font-semibold hover:text-teal-200 transition">
          Home
        </Link>
        <Link to="/dashboard" className="text-white font-semibold hover:text-teal-200 transition">
          Dashboard 
        </Link>
      </div>

      {/* Greeting & Profile */}
      <div className="flex items-center gap-3">
        <span className="text-white font-medium">Hello, {patientName}</span>

        {/* Profile Image */}
        <div className="relative">
          <img
            src={profileImage}
            alt="Patient"
            className="w-10 h-10 rounded-full object-cover border-2 border-white cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          />
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
