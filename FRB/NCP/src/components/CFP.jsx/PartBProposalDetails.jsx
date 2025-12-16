import React, { useState } from "react";

export default function PartBProposalDetails({ initialPartA = {}, onBack, onSave }) {
  const [values, setValues] = useState({
    concept: "",
    problemAddressed: "",
    currentScienceTechnology: "",
    advantageProposed: "",
    scienceTechGap: "",
    valueAddition: "",
    objectives: "",
    novelty: "",
    scientificKnowledgeCreation: "",
    technologyDevelopment: "",
    processProductDevelopment: "",
    competitiveLandscape: "",
    internationalStateOfArt: "",
    nationalStateOfArt: "",
    iprMapping: "",
    existingKnowledgeGaps: "",
    projectStrategy: "",
    ...initialPartA, // available if you want to reference Part A fields
  });

  function updateField(name, v) {
    setValues(s => ({ ...s, [name]: v }));
  }

  function handleSave(e) {
    e.preventDefault();
    if (!values.objectives || !values.objectives.trim()) {
      alert("Please enter Objectives before saving Part B.");
      return;
    }
    const payload = { partB: values };
    console.log("Part B saved payload:", payload);
    if (typeof onSave === "function") onSave(payload);
    alert("Part B saved (console).");
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">PART-B: PROPOSAL DETAILS</h2>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-48 text-sm font-medium">1.1.1 Concept</div>
            <textarea value={values.concept} onChange={e=>updateField("concept", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={2} />
          </div>

          <div className="flex items-start gap-4">
            <div className="w-48 text-sm font-medium">1.1.2.1 The Problem Addressed</div>
            <textarea value={values.problemAddressed} onChange={e=>updateField("problemAddressed", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={2} />
          </div>

          <div className="flex items-start gap-4">
            <div className="w-48 text-sm font-medium">1.1.3 Objectives</div>
            <textarea value={values.objectives} onChange={e=>updateField("objectives", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={6} />
          </div>

          {/* rest of fields */}
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start gap-4">
              <div className="w-48 text-sm font-medium">1.1.4 Novelty</div>
              <textarea value={values.novelty} onChange={e=>updateField("novelty", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={2} />
            </div>

            <div className="flex items-start gap-4">
              <div className="w-48 text-sm font-medium">1.2.1 Scientific Knowledge Creation</div>
              <textarea value={values.scientificKnowledgeCreation} onChange={e=>updateField("scientificKnowledgeCreation", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={2} />
            </div>

            <div className="flex items-start gap-4">
              <div className="w-48 text-sm font-medium">1.2.2 Technology Development</div>
              <textarea value={values.technologyDevelopment} onChange={e=>updateField("technologyDevelopment", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={2} />
            </div>

            <div className="flex items-start gap-4">
              <div className="w-48 text-sm font-medium">1.3 Competitive Landscape</div>
              <textarea value={values.competitiveLandscape} onChange={e=>updateField("competitiveLandscape", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={2} />
            </div>

            <div className="flex items-start gap-4">
              <div className="w-48 text-sm font-medium">1.3.1 International State of Art</div>
              <textarea value={values.internationalStateOfArt} onChange={e=>updateField("internationalStateOfArt", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={2} />
            </div>

            <div className="flex items-start gap-4">
              <div className="w-48 text-sm font-medium">1.3.2 National State of Art</div>
              <textarea value={values.nationalStateOfArt} onChange={e=>updateField("nationalStateOfArt", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={2} />
            </div>

            <div className="flex items-start gap-4">
              <div className="w-48 text-sm font-medium">1.3.3 IPR Mapping</div>
              <textarea value={values.iprMapping} onChange={e=>updateField("iprMapping", e.target.value)} className="flex-1 border rounded px-3 py-2" rows={2} />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button type="button" onClick={onBack} className="px-4 py-2 border rounded">Back</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Save Part B</button>
          </div>
        </form>
      </div>
    </div>
  );
}
