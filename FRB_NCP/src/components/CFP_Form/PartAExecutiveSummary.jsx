import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectExecutiveSummary() {

  const navigate = useNavigate();

  const handleSave = () => {
    alert("Form data saved (you can add real logic later)");
  };

  return (
    <div
      className="
        min-h-screen flex justify-center items-start py-20 
        bg-gradient-to-br from-red-100 via-indigo-200 to-purple-200 
        animate-gradient-x p-6
      "
    >

      {/* Outer Card */}
      <div
        className="
          relative w-[95%] max-w-7xl 
          bg-white/70 backdrop-blur-lg
          rounded-2xl shadow-xl
          border border-white/50
          p-12 transition-all hover:shadow-2xl
        "
      >

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="
            absolute left-6 top-6 
            bg-white/60 backdrop-blur-md
            hover:bg-white/80 
            text-gray-700 
            font-semibold
            px-5 py-2 
            rounded-lg shadow
            border
            transition
          "
        >
          ← Back
        </button>

        {/* HEADER */}
        <h2
          className="
            text-4xl font-extrabold text-center mb-10
            bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600
            bg-clip-text text-transparent
            tracking-tight
          "
        >
          PART-A : EXECUTIVE SUMMARY
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-12 gap-6">

          <FormBlock label="Full Title of Proposal (with Acronym)" span={12} rows={3} />

          <FormBlock label="Category of Project" span={3} />
          <FormBlock label="CSIR Thematic Area" span={3} rows={1} />
          <FormBlock label="Broad Area" span={3} rows={1} />
          <FormBlock label="Lab" span={3} />

          <FormBlock label="Principal Investigator (PI)" span={6} />
          <FormBlock label="Participating Labs" span={6} />

          <FormBlock label="Co-PIs" span={12} rows={1} />

          <FormBlock label="Total Cost (Rs. in Lakhs)" span={6} />
          <FormBlock label="Project Duration (Months)" span={6} />

          <FormBlock label="Defining the Problem" span={12} rows={7} />

          <FormBlock label="Abstract of Project" span={12} rows={8} />

          <FormBlock label="Keywords" span={12} rows={3} />

          <FormBlock label="Current TRL" span={6} />
          <FormBlock label="Target TRL" span={6} />

          <FormBlock label="Outcome Envisaged" span={12} rows={7} />

        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-12">

          {/* SAVE */}
          <button
            onClick={handleSave}
            className="
              px-10 py-4 rounded-full
              bg-gradient-to-r from-green-500 to-teal-600
              text-white font-semibold text-lg
              shadow-lg hover:shadow-2xl 
              transition-transform hover:scale-105 active:scale-95
            "
          >
            💾 Save Form
          </button>

          {/* NEXT */}
          <button
            onClick={() => navigate('/add-cfp/partBSection1Page')}
            className="
              px-10 py-4 rounded-full
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white font-semibold text-lg
              shadow-lg hover:shadow-2xl 
              transition-transform hover:scale-105 active:scale-95
            "
          >
            👉 Go to Part-B Section-1 Page
          </button>

        </div>

      </div>

    </div>
  );
}

function FormBlock({ label, span, rows }) {
  return (
    <div
      className={`
        col-span-${span} flex flex-col
        bg-white/60 backdrop-blur-xl
        border border-white/50 
        p-5 rounded-xl shadow
        hover:shadow-lg transition
      `}
    >
      <label
        className="
          font-semibold text-gray-700 tracking-wide text-sm mb-2
        "
      >
        {label}
      </label>

      {rows ? (
        <textarea
          rows={rows}
          className="
            bg-white/70
            border border-gray-300 
            rounded-lg p-3 outline-none
            focus:ring-4 focus:ring-indigo-300 
            transition
          "
        />
      ) : (
        <input
          className="
            bg-white/70
            border border-gray-300 
            rounded-lg p-3 outline-none
            focus:ring-4 focus:ring-indigo-300 
            transition
          "
        />
      )}
    </div>
  );
}
