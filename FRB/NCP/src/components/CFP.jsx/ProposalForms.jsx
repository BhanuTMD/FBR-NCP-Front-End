import React, { useState } from "react";
import PartAExecutiveSummary from "./PartAExecutiveSummary";
import PartBProposalDetails from "./PartBProposalDetails";

export default function ProposalForms() {
  const [partAData, setPartAData] = useState(null);
  const [showPartB, setShowPartB] = useState(false);

  function handlePartASaved(data) {
    setPartAData(data);
    setShowPartB(true);
  }

  function handleBack() {
    setShowPartB(false);
  }

  function handlePartBSave(payload) {
    // Merge and send to backend (replace console.log with axios.post)
    const final = { partA: partAData, partB: payload.partB || payload };
    console.log("Final payload:", final);
    alert("Saved both parts (console). Replace with API call.");
  }

  return (
    <div>
      {!showPartB ? (
        <PartAExecutiveSummary onSaved={handlePartASaved} />
      ) : (
        <PartBProposalDetails initialPartA={partAData} onBack={handleBack} onSave={handlePartBSave} />
      )}
    </div>
  );
}
