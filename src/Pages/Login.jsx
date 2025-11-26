import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/Signin.jpg')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Centered Form Card */}
      <div className="relative z-10 mt-40 mb-90 bg-white/20 backdrop-blur-md shadow-2xl shadow-black p-8 rounded-2xl shadow-2xl w-[90%] max-w-md border border-white/20 animate-fadeIn">
        <div className="flex flex-col items-center mb-6">
          <FaUserMd className="text-teal-400 text-5xl animate-bounce" />
          <h2 className="text-3xl font-bold text-white mt-3">Patient Login</h2>
          <p className="text-gray-200 text-center mt-2">
            Welcome back! Sign in to book your appointment.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-200 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-white/30 bg-white/20 text-white placeholder-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-200 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-white/30 bg-white/20 text-white placeholder-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>
      
        {/* SignIn button */}
          <Link to="/dashboard">
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-transform duration-200 transform hover:scale-105 shadow-lg"
          >Sign In </button>
          </Link>
        
        {/* Signup Link */}
          <p className="text-center text-gray-200 text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-teal-400 font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </form>
      </div>

      {/* Simple Animation */}
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

export default Login;
