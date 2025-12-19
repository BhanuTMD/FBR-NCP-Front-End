import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectExecutiveSummary() {

  const navigate = useNavigate();

  const handleSave = () => {
    alert("Form data saved (you can add real logic later)");
  };

  return (
    <div className="min-h-screen bg-[#FFF8E6] flex justify-center items-start py-10">
      <div className="w-[95%] max-w-7xl bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-[#e6d7b8] p-8">
         {/* BACK BUTTON  */}
        <button
          onClick={() => navigate(-1)}
          className="
            absolute left-6 top-6 
            bg-[#EED9AA]
            hover:bg-[#e5cc92]
            text-[#6C4E1E] 
            font-semibold
            px-5 py-2 
            rounded-lg
            border border-[#dbc592]
            shadow-sm
            transition-all duration-300
          "
        >
          ← Back
        </button>



        <h2 className="text-3xl font-bold text-center mb-8 text-[#6C4E1E] tracking-wide">
          PART-A : EXECUTIVE SUMMARY
        </h2>

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

        {/* Buttons Row */}
        <div className="flex justify-between mt-10">

          {/* SAVE BUTTON */}
          <button
            onClick={handleSave}
            className="
              bg-[#F9D97A]
              hover:bg-[#f4c653]
              text-[#6C4E1E]
              font-semibold
              px-8 py-3 rounded-xl
              shadow-md border border-[#e5ce85]
              transition-all duration-300
            "
          >
            💾 Save Form
          </button>

          {/* NEXT PAGE BUTTON */}
          <button
            onClick={() => navigate('/PartBSection1Page')}
            className="
              bg-[#F2A65A]
              hover:bg-[#ee8f33]
              text-white
              font-semibold
              px-8 py-3 rounded-xl
              shadow-md border border-[#e19c64]
              transition-all duration-300
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
      className={`col-span-${span} flex flex-col bg-[#FFFDF8] border border-[#E8DDBF] p-4 rounded-xl hover:shadow-lg transition-all duration-300`}
    >
      <label className="font-semibold tracking-wide text-[14px] mb-2 text-[#746039]">
        {label}
      </label>

      {rows ? (
        <textarea
          rows={rows}
          className="bg-white border border-[#d7c9a6] rounded-lg p-3 outline-none
                     focus:ring-2 ring-[#F9CC6C] transition-all duration-300"
        />
      ) : (
        <input
          className="bg-white border border-[#d7c9a6] rounded-lg p-3 outline-none
                     focus:ring-2 ring-[#F9CC6C] transition-all duration-300"
        />
      )}
    </div>
  );
}
