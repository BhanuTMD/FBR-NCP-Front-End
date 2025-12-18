import React, { useState } from "react";

export default function PartBProposalDetails({ initialPartA = {}, onBack, onSave }) {

  const [values, setValues] = useState({

    /* -------------------------
        1 — SUMMARY SECTION
    ------------------------- */

    concept: "",
    problemAddressed: "",
    currentScienceTech: "",
    advantageProposed: "",
    scienceTechGap: "",
    valueAddition: "",
    objectives: "",

    novelty: "",
    envisagedDelivery: "",

    scientificKnowledgeCreation: "",
    technologyDevelopment: "",
    processProductDevelopment: "",

    competitiveLandscape: "",
    internationalStateOfArt: "",
    nationalStateOfArt: "",
    iprMapping: "",
    existingKnowledgeGaps: "",

    projectStrategy: "",

    /* -------------------------
       2 — Work Plan
    ------------------------- */
    workPlan: [
      {
        vertical: "",
        workPackage: "",
        leadParticipant: "",
        participants: "",
        objectives: "",
        description: "",
        deliverables: "",
        open: false
      }
    ],

    ...initialPartA,
  });


  /* -------------------------
     METHODS
  ------------------------- */

  const updateField = (k, v) =>
    setValues((s) => ({ ...s, [k]: v }));


  /* -------------------------
     WORK-PLAN HELPERS
  ------------------------- */

  const updateWorkItem = (i, k, v) => {
    const arr = [...values.workPlan];
    arr[i][k] = v;
    updateField("workPlan", arr);
  };

  const toggleDetails = (i) =>
    updateWorkItem(i, "open", !values.workPlan[i].open);

  const addWorkRow = () =>
    updateField("workPlan", [
      ...values.workPlan,
      {
        vertical: "",
        workPackage: "",
        leadParticipant: "",
        participants: "",
        objectives: "",
        description: "",
        deliverables: "",
        open: false,
      }
    ]);

  const removeWorkRow = (i) =>
    updateField("workPlan", values.workPlan.filter((_, x) => x !== i));


  function handleSave(e) {
    e.preventDefault();

    if (!values.objectives?.trim()) {
      alert("Objectives must not be empty");
      return;
    }

    onSave?.({ partB: values });
    alert("Part-B saved");
  }


  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">

        <h2 className="text-xl font-bold mb-6">
          PART-B: PROPOSAL DETAILS
        </h2>


        <form onSubmit={handleSave} className="space-y-10">

          {/* ---------------------------------------------------- */}
          {/* 1 – Scientific & Technical Section                   */}
          {/* ---------------------------------------------------- */}

          <h3 className="text-lg font-bold border-b pb-2">
            1. Scientific and Technical Summary
          </h3>

          {[
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

            ["1.4 Project Strategy", "projectStrategy"],

          ].map(([label, field]) => (
            <div key={field} className="flex items-start gap-4">
              <div className="w-72 text-sm font-medium">{label}</div>
              <textarea
                rows={field === "objectives" ? 4 : 2}
                value={values[field]}
                onChange={(e) => updateField(field, e.target.value)}
                className="flex-1 border rounded px-3 py-2"
              />
            </div>
          ))}

          {/* ---------------------------------------------------- */}
          {/* 2 — Detailed Work Plan                               */}
          {/* ---------------------------------------------------- */}

          <h3 className="text-lg font-bold border-t pt-8">
            2. Detailed Work Plan Proposed
          </h3>

          <h4 className="font-semibold mt-4 mb-2">
            2.1 Vertical and Work Package List
          </h4>

          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1 w-16 text-center">Sr. No.</th>
                <th className="border px-2 py-1">Vertical</th>
                <th className="border px-2 py-1">Work package</th>
                <th className="border px-2 py-1">Lead Participant</th>
                <th className="border px-2 py-1">Participants</th>
                <th className="border px-2 py-1">Action</th>
              </tr>
            </thead>

            <tbody>
              {values.workPlan.map((wp, i) => (
                <React.Fragment key={i}>
                  <tr>

                    {/* NEW COLUMN → SR NO */}
                    <td className="border text-center font-semibold">
                      {i + 1}
                    </td>

                    <td className="border">
                      <input
                        className="w-full px-2 py-1"
                        value={wp.vertical}
                        onChange={(e) => updateWorkItem(i, "vertical", e.target.value)}
                      />
                    </td>

                    <td className="border">
                      <input
                        className="w-full px-2 py-1"
                        value={wp.workPackage}
                        onChange={(e) => updateWorkItem(i, "workPackage", e.target.value)}
                      />
                    </td>

                    <td className="border">
                      <input
                        className="w-full px-2 py-1"
                        value={wp.leadParticipant}
                        onChange={(e) => updateWorkItem(i, "leadParticipant", e.target.value)}
                      />
                    </td>

                    <td className="border">
                      <input
                        className="w-full px-2 py-1"
                        value={wp.participants}
                        onChange={(e) => updateWorkItem(i, "participants", e.target.value)}
                      />
                    </td>

                    <td className="border text-center">
                      <button
                        type="button"
                        className="text-blue-600 underline px-2"
                        onClick={() => toggleDetails(i)}
                      >
                        {wp.open ? "Hide" : "Details"}
                      </button>

                      <button
                        type="button"
                        className="text-red-600 underline px-2"
                        onClick={() => removeWorkRow(i)}
                      >
                        Delete
                      </button>
                    </td>

                  </tr>

                  {wp.open && (
                    <tr>
                      <td colSpan={6} className="border bg-gray-50 p-4">

                        <p><b>Sr No:</b> {i + 1}</p>
                        <p><b>Vertical:</b> {wp.vertical || "-"}</p>
                        <p><b>Work Package:</b> {wp.workPackage || "-"}</p>
                        <p><b>Lead Participant:</b> {wp.leadParticipant || "-"}</p>
                        <p><b>Participants:</b> {wp.participants || "-"}</p>

                        <label className="block mt-3 font-medium">
                          Objectives
                        </label>
                        <textarea
                          rows={2}
                          className="w-full border px-2 py-1"
                          value={wp.objectives}
                          onChange={(e) => updateWorkItem(i, "objectives", e.target.value)}
                        />

                        <label className="block mt-3 font-medium">
                          Description of Work
                        </label>
                        <textarea
                          rows={3}
                          className="w-full border px-2 py-1"
                          value={wp.description}
                          onChange={(e) => updateWorkItem(i, "description", e.target.value)}
                        />

                        <label className="block mt-3 font-medium">
                          Deliverables
                        </label>
                        <textarea
                          rows={2}
                          className="w-full border px-2 py-1"
                          value={wp.deliverables}
                          onChange={(e) => updateWorkItem(i, "deliverables", e.target.value)}
                        />

                      </td>
                    </tr>
                  )}

                </React.Fragment>
              ))}
            </tbody>
          </table>


          <button
            type="button"
            onClick={addWorkRow}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            + Add Work Package
          </button>


          {/* ---------------------------------------------------- */}
          {/* FOOTER BUTTONS                                       */}
          {/* ---------------------------------------------------- */}

          <div className="flex justify-end gap-4 pt-8 border-t">
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 border rounded"
            >
              Back
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded"
            >
              Save Part-B
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
