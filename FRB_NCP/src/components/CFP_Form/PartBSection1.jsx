import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PartBSection1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    concept: "",
    scientificRelevance: "",
    problemAddressed: "",
    currentTechLevel: "",
    advantage: "",
    whiteSpaceGap: "",
    valueAddition: "",
    objectives: "",
    novelty: "",
    envisagedDelivery: "",
    knowledgeCreation: "",
    techDevelopment: "",
    productDevelopment: "",
    internationalSOA: "",
    nationalSOA: "",
    iprMapping: "",
    knowledgeGaps: "",
    projectStrategy: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Section 1 data saved!");
  };

  const goToNextSection = () => {
    navigate("/add-cfp/partBSection2Page");
  };

  return (
    <div
      className="min-h-screen bg-[#FFF8E6] flex justify-center items-start py-10"
    >
      <div
        className="w-[95%] max-w-5xl bg-white/80 shadow-xl border border-[#ebdcc0] rounded-2xl p-8"
      >
        <button
          onClick={() => navigate("/add-cfp/partAExecutiveSummary")}
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

        {/* Title */}
        <h2 className="text-3xl font-bold mb-2 text-center text-[#6C4E1E]">
          PART-B : PROPOSAL DETAILS
        </h2>

        <h3 className="text-xl font-semibold text-[#6C4E1E] mb-8 text-center">
          1. Scientific and Technical Summary
        </h3>

        {/* FORM FIELDS */}
        {renderField("1.1.1 Concept", "concept", formData, handleChange)}
        {renderField("1.1.2 Scientific Relevance", "scientificRelevance", formData, handleChange)}
        {renderField("1.1.2.1 The Problem Addressed", "problemAddressed", formData, handleChange)}
        {renderField("1.1.2.2 Current general science/technology level", "currentTechLevel", formData, handleChange)}
        {renderField("1.1.2.3 Advantage of the proposed work", "advantage", formData, handleChange)}
        {renderField("1.1.2.4 Science/Technology Gap (White space)", "whiteSpaceGap", formData, handleChange)}
        {renderField("1.1.2.5 Value Addition proposed", "valueAddition", formData, handleChange)}
        {renderField("1.1.3 Objectives", "objectives", formData, handleChange)}
        {renderField("1.1.4 Novelty", "novelty", formData, handleChange)}
        {renderField("1.2 Envisaged Delivery (100 words max)", "envisagedDelivery", formData, handleChange)}

        <br />

        <h3 className="text-xl font-semibold text-[#6C4E1E] mt-8">
          1.2 Deliverables
        </h3>

        {renderField("1.2.2 Scientific Knowledge Creation", "knowledgeCreation", formData, handleChange)}
        {renderField("1.2.3 Technology Development", "techDevelopment", formData, handleChange)}
        {renderField("1.2.4 Process/Product Development", "productDevelopment", formData, handleChange)}

        <br />

        <h3 className="text-xl font-semibold text-[#6C4E1E] mt-8">
          1.3 Competitive Landscape & Benchmarking
        </h3>

        {renderField("1.3.2 International State of Art", "internationalSOA", formData, handleChange)}
        {renderField("1.3.3 National State of Art", "nationalSOA", formData, handleChange)}
        {renderField("1.3.4 IPR Mapping", "iprMapping", formData, handleChange)}
        {renderField("1.3.5 Knowledge Gaps & Scope of Innovation", "knowledgeGaps", formData, handleChange)}

        {renderField("1.4 Project Strategy", "projectStrategy", formData, handleChange)}

        {/* Button Row */}
        <div className="flex justify-between mt-10">

          <button
            onClick={handleSave}
            className="
            bg-[#F9D97A] hover:bg-[#f4c653]
            text-[#6C4E1E] font-semibold px-8 py-3 rounded-xl
            shadow-md border border-[#e5ce85]
            transition-all duration-300"
          >
            💾 Save Form
          </button>

          <button
            onClick={goToNextSection}
            className="
            bg-[#F2A65A] hover:bg-[#ee8f33]
            text-white font-semibold px-8 py-3 rounded-xl
            shadow-md border border-[#e19c64]
            transition-all duration-300"
          >
            👉 Go to Part-B Section-2
          </button>
        </div>

      </div>
    </div>
  );
}

// reusable field block component
function renderField(label, name, data, change) {
  return (
    <div className="mb-6">
      <label className="block text-[#6C4E1E] font-medium mb-1 text-sm">
        {label}
      </label>
      <textarea
        name={name}
        value={data[name]}
        onChange={change}
        rows={4}
        className="
          w-full bg-white border border-[#e0d2b6]
          rounded-lg p-3 outline-none
          focus:ring-2 ring-[#F9CC6C]
          transition-all duration-300
        "
      />
    </div>
  );
}
