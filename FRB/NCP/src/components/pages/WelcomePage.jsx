// src/components/pages/WelcomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  // Optional: warmup routing (prefetch)
  function warmupRoute() {
    // Example (only useful if using lazy-loaded routes):
    // import("../AddCFP/AddCFPPage");
  }

  function goToAddCFP() {
    navigate("/add-cfp");
  }

  return (
    <main
      role="main"
      className="
        min-h-screen 
        flex flex-col items-center justify-center
        bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200
        p-6 animate-gradient-x
      "
      aria-label="Welcome to CFP Portal"
    >
      {/* Card */}
      <article
        className="
          bg-white/80 backdrop-blur-xl 
          shadow-2xl border border-white/40
          rounded-3xl p-10 max-w-xl w-full text-center
          transition-all duration-500
          hover:shadow-[0_0_35px_rgba(255,255,255,0.5)]
        "
      >
        <h1
          className="
            text-5xl font-extrabold mb-4
            bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600
            bg-clip-text text-transparent
            animate-pulse
          "
        >
          Welcome to the CFP Portal
        </h1>

        <p className="text-gray-700 text-lg mb-8 font-medium">
          Use the menu to manage and create CFP proposals.
        </p>

        <button
          onMouseEnter={warmupRoute}
          onClick={goToAddCFP}
          aria-label="Go to Add CFP form"
          className="
            px-7 py-3 
            bg-gradient-to-r from-purple-500 to-blue-600 
            text-white font-semibold rounded-full
            shadow-xl 
            transition-all duration-300
            hover:from-blue-600 hover:to-purple-500
            hover:scale-105 active:scale-95
            hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]
            focus:outline-none focus:ring-4 focus:ring-purple-300
          "
        >
          Go to Add CFP 🚀
        </button>
      </article>
    </main>
  );
}
