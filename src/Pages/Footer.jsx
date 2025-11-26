import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/dashboard");
  if (hideFooter) return null;

  return (
    <footer className="bg-black text-white border-t">
      {/* BOTTOM STRIP */}
      <div className="bg-teal-600 py-3 flex justify-center text-white text-sm font-medium">
        © {new Date().getFullYear()} Leemahcare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
