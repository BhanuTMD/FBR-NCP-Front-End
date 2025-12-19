import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PartBSection1Form() {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE button logic
  const handleSave = () => {
    console.log("Saved Form Data:", formData);

    // API call placeholder
    // await axios.post("/api/savePartBSection1", formData);

    alert("Section 1 data saved!");
  };

  // NEXT PAGE button logic
  const goToNextSection = () => {
    navigate("/PartBSection2Page");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      <h2>PART-B: PROPOSAL DETAILS</h2>

      <h3>1. Scientific and Technical Summary</h3>

      <label>1.1.1 Concept:</label>
      <textarea name="concept" value={formData.concept} onChange={handleChange} />

      <label>1.1.2 Scientific Relevance:</label>
      <textarea
        name="scientificRelevance"
        value={formData.scientificRelevance}
        onChange={handleChange}
      />

      <label>1.1.2.1 The Problem Addressed:</label>
      <textarea
        name="problemAddressed"
        value={formData.problemAddressed}
        onChange={handleChange}
      />

      <label>1.1.2.2 Current general science/technology level:</label>
      <textarea
        name="currentTechLevel"
        value={formData.currentTechLevel}
        onChange={handleChange}
      />

      <label>1.1.2.3 Advantage of the proposed work:</label>
      <textarea
        name="advantage"
        value={formData.advantage}
        onChange={handleChange}
      />

      <label>1.1.2.4 Science/Technology Gap (White space):</label>
      <textarea
        name="whiteSpaceGap"
        value={formData.whiteSpaceGap}
        onChange={handleChange}
      />

      <label>1.1.2.5 Value Addition proposed:</label>
      <textarea
        name="valueAddition"
        value={formData.valueAddition}
        onChange={handleChange}
      />

      <label>1.1.3 Objectives:</label>
      <textarea
        name="objectives"
        value={formData.objectives}
        onChange={handleChange}
      />

      <label>1.1.4 Novelty:</label>
      <textarea
        name="novelty"
        value={formData.novelty}
        onChange={handleChange}
      />

      <label>1.2 Envisaged Delivery (100 words max):</label>
      <textarea
        name="envisagedDelivery"
        value={formData.envisagedDelivery}
        onChange={handleChange}
        maxLength={700}
      />

      <label>1.2.2 Scientific Knowledge Creation:</label>
      <textarea
        name="knowledgeCreation"
        value={formData.knowledgeCreation}
        onChange={handleChange}
      />

      <label>1.2.3 Technology Development:</label>
      <textarea
        name="techDevelopment"
        value={formData.techDevelopment}
        onChange={handleChange}
      />

      <label>1.2.4 Process/Product Development:</label>
      <textarea
        name="productDevelopment"
        value={formData.productDevelopment}
        onChange={handleChange}
      />

      <h3>1.3 Competitive Landscape and Benchmarking</h3>

      <label>1.3.2 International State of Art:</label>
      <textarea
        name="internationalSOA"
        value={formData.internationalSOA}
        onChange={handleChange}
      />

      <label>1.3.3 National State of Art:</label>
      <textarea
        name="nationalSOA"
        value={formData.nationalSOA}
        onChange={handleChange}
      />

      <label>1.3.4 IPR Mapping:</label>
      <textarea
        name="iprMapping"
        value={formData.iprMapping}
        onChange={handleChange}
      />

      <label>1.3.5 Knowledge Gaps & Scope of Innovation:</label>
      <textarea
        name="knowledgeGaps"
        value={formData.knowledgeGaps}
        onChange={handleChange}
      />

      <label>1.4 Project Strategy:</label>
      <textarea
        name="projectStrategy"
        value={formData.projectStrategy}
        onChange={handleChange}
      />

      <br />

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        <button type="button" onClick={handleSave}>
          Save
        </button>

        <button type="button" onClick={goToNextSection}>
          Go to PartBSection2
        </button>
      </div>

    </div>
  );
}

export default PartBSection1Form;
