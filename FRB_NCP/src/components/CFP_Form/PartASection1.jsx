import React from "react";

export default function PartBSection1({ values, updateField }) {

  const fields = [
    ["1.1.1 Concept", "concept"],
    ["1.1.2 The Problem Addressed", "problemAddressed"],
    ["1.1.2.2 Current Science/Technology", "currentScienceTech"],
    ["1.1.2.3 Advantage of Proposed Work", "advantageProposed"],
    ["1.1.2.4 Science/Technology Gap", "scienceTechGap"],
    ["1.1.2.5 Value Addition Proposed", "valueAddition"],
    ["1.1.3 Objectives", "objectives"],
    ["1.1.4 Novelty", "novelty"],
    ["1.2 Envisaged Delivery", "envisagedDelivery"],
    ["1.2.1 Scientific Knowledge Creation", "scientificKnowledgeCreation"],
    ["1.2.2 Technology Development", "technologyDevelopment"],
    ["1.2.3 Process/Product Development", "processProductDevelopment"],
    ["1.3 Competitive Landscape", "competitiveLandscape"],
    ["1.3.1 International State of Art", "internationalStateOfArt"],
    ["1.3.2 National State of Art", "nationalStateOfArt"],
    ["1.3.3 IPR Mapping", "iprMapping"],
    ["1.3.4 Existing Knowledge Gaps", "existingKnowledgeGaps"],
    ["1.4 Project Strategy", "projectStrategy"]
  ];

  return (
    <div className="space-y-6">

      <h3 className="text-lg font-bold border-b pb-2">
        1. Scientific & Technical Summary
      </h3>

      {fields.map(([label, field]) => (
        <div key={field} className="flex items-start gap-4">
          <div className="w-72 text-sm font-medium">{label}</div>
          <textarea
            rows={field === "objectives" ? 4 : 2}
            className="flex-1 border rounded px-3 py-2"
            value={values[field]}
            onChange={(e) => updateField(field, e.target.value)}
          />
        </div>
      ))}

    </div>
  );
}
