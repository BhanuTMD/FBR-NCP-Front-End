// src/components/pages/WelcomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <main
      className="
        min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-red-100 via-indigo-200 to-purple-200 
        animate-gradient-x p-6
      "
    >
      <div
        className="
          max-w-2xl w-full text-center
          bg-white/70 backdrop-blur-lg shadow-xl 
          border border-white/50 
          rounded-2xl p-12 
          transition-all hover:shadow-2xl
        "
      >
        {/* Title */}
        <h1
          className="
            text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-red-700 via-purple-600 to-pink-600
            bg-clip-text text-transparent 
            mb-6 tracking-tight
          "
        >
          Welcome to the CFP Portal
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl mb-10 font-medium leading-relaxed">
          Submit, review and manage CSIR CFP Project Proposals seamlessly in one place.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/add-cfp")}
          className="
            px-8 py-4 rounded-full
            bg-gradient-to-r from-indigo-500 to-purple-600
            text-white font-semibold text-lg
            shadow-lg hover:shadow-2xl 
            transition-transform hover:scale-105 active:scale-95
            focus:outline-none focus:ring-4 focus:ring-indigo-300
          "
        >
          Start Adding CFP 🚀
        </button>

        {/* Footer */}
        <p className="mt-10 text-sm text-gray-600">
          Developed by CSIR Headquarters © {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
