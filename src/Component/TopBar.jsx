import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const TopBar = ({
  patientName = "Patient",
  initialProfileImage = "/profile.jpg"
}) => {
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

      {/*Greeting */}
      <div className="relative flex items-center gap-3">
        <span className="text-white font-medium">Hello, {patientName}</span>

        <div className="relative">
      {/* Profile Image */}
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

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-teal-300 ml-2 text-white px-2 py-1 rounded hover:bg-teal-500 transition"
          >▼ </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-teal-500 rounded-md shadow-lg border z-50">
              <label
                htmlFor="upload-profile"
                className="block px-4 py-2 text-white hover:bg-teal-100 cursor-pointer"
                onClick={() => fileInputRef.current.click()}
              >
                Upload New Picture
              </label>
              <Link
                to="/profile"
                className="block px-4 py-2 text-white hover:bg-teal-100"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => alert("Logging out...")}
                className="w-full text-left px-4 py-2 text-white hover:bg-teal-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
