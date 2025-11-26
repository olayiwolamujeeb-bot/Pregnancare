import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const Signup = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    {/*Password match validation*/}
    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    {/*Submission success*/}
    alert(`✅ Registration successful!\nWelcome, ${formData.fullName}`);
    
    {/*Redirect to Login page after 1 second*/}
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Signup.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Centered Registration Form */}
      <div className="relative z-10 mt-40 mb-20 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-[90%] max-w-md border border-white/20 animate-fadeIn">
        <div className="flex flex-col items-center mb-6">
          <FaUserPlus className="text-teal-400 text-5xl animate-bounce" />
          <h2 className="text-3xl font-bold text-white mt-3">Create Account</h2>
          <p className="text-gray-200 text-center mt-2">
            Register to book appointments and manage your health records.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm text-gray-200 mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-white/30 bg-white/20 text-white placeholder-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-200 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-white/30 bg-white/20 text-white placeholder-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm text-gray-200 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-white/30 bg-white/20 text-white placeholder-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-gray-200 mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-white/30 bg-white/20 text-white placeholder-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-transform duration-200 transform hover:scale-105 shadow-lg"
          >
            Sign Up
          </button>

          {/* Link to Login */}
          <p className="text-center text-gray-200 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-400 font-semibold hover:underline">
              Sign in here
            </Link>
          </p>
        </form>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Signup;
