import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PartBSection2() {

  const navigate = useNavigate();

  /** ------------------------------------------
   * Load Part-B Data or Create New Structure
   ------------------------------------------ **/
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem("partBdata");
    return stored
      ? JSON.parse(stored)
      : {
          workPlan: [
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
          ]
        };
  });

  /** ------------------------------------------
   * Work Package Table Handlers
   ------------------------------------------ **/
  const updateWorkItem = (index, field, value) => {
    const arr = [...data.workPlan];
    arr[index][field] = value;
    setData({ ...data, workPlan: arr });
  };

  const toggleDetails = (index) => {
    updateWorkItem(index, "open", !data.workPlan[index].open);
  };

  const addWorkRow = () => {
    setData({
      ...data,
      workPlan: [
        ...data.workPlan,
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
      ]
    });
  };

  const removeWorkRow = (index) => {
    setData({
      ...data,
      workPlan: data.workPlan.filter((_, i) => i !== index)
    });
  };

  /** ------------------------------------------
   * Save & Navigation Controls
   ------------------------------------------ **/
  const saveB = () => {
    localStorage.setItem("partBdata", JSON.stringify(data));
    alert("Part-B Saved Successfully.");
  };

  const goBack = () => {
    localStorage.setItem("partBdata", JSON.stringify(data));
    navigate("/add-cfp/part-b/section-1");
  };

  const finishSection = () => {
    localStorage.setItem("partBdata", JSON.stringify(data));
    navigate("/add-cfp/print");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow rounded">

      {/* -------------------------------- HEADER TITLE -------------------------------- */}
      <h2 className="text-xl font-bold mb-6">
        Part-B — Section-2 : Detailed Work Plan
      </h2>

      {/* -------------------------------- TABLE BEGIN -------------------------------- */}
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1 w-12 text-center">Sr</th>
            <th className="border px-2 py-1">Vertical</th>
            <th className="border px-2 py-1">Work Package</th>
            <th className="border px-2 py-1">Lead Participant</th>
            <th className="border px-2 py-1">Participants</th>
            <th className="border px-2 py-1 w-20 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.workPlan.map((wp, index) => (
            <React.Fragment key={index}>

              {/* -------------------------------- MAIN TABLE ROW -------------------------------- */}
              <tr>
                <td className="border text-center font-semibold">{index + 1}</td>

                {/* --- VERTICAL --- */}
                <td className="border">
                  <input
                    className="w-full px-2 py-1"
                    value={wp.vertical}
                    onChange={(e) =>
                      updateWorkItem(index, "vertical", e.target.value)
                    }
                  />
                </td>

                {/* --- WORK PACKAGE --- */}
                <td className="border">
                  <input
                    className="w-full px-2 py-1"
                    value={wp.workPackage}
                    onChange={(e) =>
                      updateWorkItem(index, "workPackage", e.target.value)
                    }
                  />
                </td>

                {/* --- LEAD --- */}
                <td className="border">
                  <input
                    className="w-full px-2 py-1"
                    value={wp.leadParticipant}
                    onChange={(e) =>
                      updateWorkItem(index, "leadParticipant", e.target.value)
                    }
                  />
                </td>

                {/* --- PARTICIPANTS --- */}
                <td className="border">
                  <input
                    className="w-full px-2 py-1"
                    value={wp.participants}
                    onChange={(e) =>
                      updateWorkItem(index, "participants", e.target.value)
                    }
                  />
                </td>

                {/* --- ACTION BUTTONS --- */}
                <td className="border text-center space-x-2">
                  <button
                    onClick={() => toggleDetails(index)}
                    className="text-blue-600 underline text-xs"
                  >
                    {wp.open ? "Hide" : "More"}
                  </button>

                  {data.workPlan.length > 1 && (
                    <button
                      onClick={() => removeWorkRow(index)}
                      className="text-red-600 underline text-xs"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>

              {/* -------------------------------- EXPANDED ROW DETAILS -------------------------------- */}
              {wp.open && (
                <tr>
                  <td colSpan={6} className="border bg-gray-50 p-3">

                    <h4 className="font-semibold mb-2 text-gray-700">
                      Vertical: {wp.vertical || "-"} | Work Package: {wp.workPackage || "-"}
                    </h4>

                    <label className="block mt-3 font-medium text-sm">Objectives</label>
                    <textarea
                      className="w-full border px-2 py-1"
                      rows={2}
                      value={wp.objectives}
                      onChange={(e) =>
                        updateWorkItem(index, "objectives", e.target.value)
                      }
                    />

                    <label className="block mt-3 font-medium text-sm">Description of Work</label>
                    <textarea
                      className="w-full border px-2 py-1"
                      rows={3}
                      value={wp.description}
                      onChange={(e) =>
                        updateWorkItem(index, "description", e.target.value)
                      }
                    />

                    <label className="block mt-3 font-medium text-sm">Deliverables</label>
                    <textarea
                      className="w-full border px-2 py-1"
                      rows={2}
                      value={wp.deliverables}
                      onChange={(e) =>
                        updateWorkItem(index, "deliverables", e.target.value)
                      }
                    />

                  </td>
                </tr>
              )}

            </React.Fragment>
          ))}
        </tbody>
      </table>
      {/* -------------------------------- TABLE END -------------------------------- */}

      {/* ADD ROW BUTTON */}
      <button
        onClick={addWorkRow}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        + Add Work Package Row
      </button>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-between border-t pt-6 mt-8">

        <button
          className="px-4 py-2 border rounded"
          onClick={goBack}
        >
          ← Back to Section-1
        </button>

        <button
          className="px-4 py-2 bg-green-700 text-white rounded"
          onClick={saveB}
        >
          Save Draft
        </button>

        <button
          className="px-4 py-2 bg-indigo-700 text-white rounded"
          onClick={finishSection}
        >
          Finish → Print
        </button>

      </div>

    </div>
  );
}
