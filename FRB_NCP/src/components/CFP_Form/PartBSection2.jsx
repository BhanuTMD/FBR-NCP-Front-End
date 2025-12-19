import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PartBSection2() {

  const navigate = useNavigate();

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


  const updateWorkItem = (i, k, v) => {
    const arr = [...data.workPlan];
    arr[i][k] = v;
    setData({ ...data, workPlan: arr });
  };

  const toggleDetails = (i) =>
    updateWorkItem(i, "open", !data.workPlan[i].open);

  const addWorkRow = () =>
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

  const removeWorkRow = i =>
    setData({
      ...data,
      workPlan: data.workPlan.filter((_, x) => x !== i)
    });


  function saveB() {
    localStorage.setItem("partBdata", JSON.stringify(data));
    alert("Part-B Saved Successfully");
  }

  function goBack() {
    localStorage.setItem("partBdata", JSON.stringify(data));
    navigate("/add-cfp/partBSection1Page");
  }

  return (
    <div className="max-w-6xl mx-auto p-10 bg-gradient-to-br from-[#fff6e6] to-[#ffeec8] shadow-2xl rounded-3xl border border-[#e6d7b8]">

  <h2 className="text-3xl font-extrabold mb-10 text-center tracking-wide text-[#6C4E1E]">
    Part-B — Section-2 : Detailed Work Plan
  </h2>

  {/* TABLE */}
  <table className="w-full text-sm overflow-hidden rounded-xl shadow-lg border border-[#d8c9a8]">

    <thead className="bg-[#f8dfa9] text-[#6C4E1E] font-semibold">
      <tr>
        <th className="px-3 py-3 text-center border border-[#e6d7b8] w-14">Sr</th>
        <th className="px-3 py-3 border border-[#e6d7b8]">Vertical</th>
        <th className="px-3 py-3 border border-[#e6d7b8]">Work Package</th>
        <th className="px-3 py-3 border border-[#e6d7b8]">Lead</th>
        <th className="px-3 py-3 border border-[#e6d7b8]">Participants</th>
        <th className="px-3 py-3 border border-[#e6d7b8] text-center w-20">
          Action
        </th>
      </tr>
    </thead>

    <tbody>
      {data.workPlan.map((wp, i) => (
        <React.Fragment key={i}>

          <tr className="hover:bg-[#fff9e9] transition">

            <td className="border border-[#e6d7b8] text-center font-bold text-[#6C4E1E]">
              {i + 1}
            </td>

            <td className="border border-[#e6d7b8]">
              <input
                className="w-full px-3 py-2 bg-transparent outline-none text-[#6C4E1E] placeholder-gray-400"
                value={wp.vertical}
                onChange={(e) => updateWorkItem(i, "vertical", e.target.value)}
              />
            </td>

            <td className="border border-[#e6d7b8]">
              <input
                className="w-full px-3 py-2 bg-transparent outline-none text-[#6C4E1E]"
                value={wp.workPackage}
                onChange={(e) => updateWorkItem(i, "workPackage", e.target.value)}
              />
            </td>

            <td className="border border-[#e6d7b8]">
              <input
                className="w-full px-3 py-2 bg-transparent outline-none text-[#6C4E1E]"
                value={wp.leadParticipant}
                onChange={(e) => updateWorkItem(i, "leadParticipant", e.target.value)}
              />
            </td>

            <td className="border border-[#e6d7b8]">
              <input
                className="w-full px-3 py-2 bg-transparent outline-none text-[#6C4E1E]"
                value={wp.participants}
                onChange={(e) => updateWorkItem(i, "participants", e.target.value)}
              />
            </td>

            <td className="border border-[#e6d7b8] text-center space-x-2">
              <button
                onClick={() => toggleDetails(i)}
                className="text-[#d28a00] underline font-semibold hover:text-[#a66a00] transition text-xs"
              >
                {wp.open ? "Hide" : "More"}
              </button>

              <button
                onClick={() => removeWorkRow(i)}
                className="text-red-600 underline font-semibold hover:text-red-800 transition text-xs"
              >
                Delete
              </button>
            </td>
          </tr>

          {wp.open && (
            <tr>
              <td colSpan={6} className="p-6 bg-[#fffdf5] border-y border-[#e6d7b8]">

                <p className="text-[#6C4E1E] mb-2 font-semibold">
                  Vertical: {wp.vertical || "-"} | WP: {wp.workPackage || "-"}
                </p>

                <label className="block mt-3 font-medium text-[#6C4E1E] text-sm">
                  Objectives
                </label>
                <textarea
                  className="w-full border border-[#dccdaa] bg-white rounded-lg px-3 py-2 outline-none shadow-sm mt-1"
                  value={wp.objectives}
                  onChange={(e) => updateWorkItem(i, "objectives", e.target.value)}
                  rows={2}
                />

                <label className="block mt-4 font-medium text-[#6C4E1E] text-sm">
                  Description of Work
                </label>
                <textarea
                  className="w-full border border-[#dccdaa] bg-white rounded-lg px-3 py-2 outline-none shadow-sm mt-1"
                  value={wp.description}
                  onChange={(e) => updateWorkItem(i, "description", e.target.value)}
                  rows={3}
                />

                <label className="block mt-4 font-medium text-[#6C4E1E] text-sm">
                  Deliverables
                </label>
                <textarea
                  className="w-full border border-[#dccdaa] bg-white rounded-lg px-3 py-2 outline-none shadow-sm mt-1"
                  value={wp.deliverables}
                  onChange={(e) => updateWorkItem(i, "deliverables", e.target.value)}
                  rows={2}
                />

              </td>
            </tr>
          )}

        </React.Fragment>
      ))}
    </tbody>

  </table>

  {/* ADD BUTTON */}
  <button
    onClick={addWorkRow}
    className="mt-6 px-6 py-3 bg-[#d29e52] hover:bg-[#c68e3c] text-white rounded-xl shadow-lg font-semibold transition"
  >
    + Add Work Package Row
  </button>

  {/* FOOTER BUTTONS */}
  <div className="flex justify-between mt-10 pt-6 border-t border-[#d9caa9]">

    <button
      onClick={goBack}
      className="px-4 py-3 rounded-xl border border-[#c2b18a] text-[#6C4E1E] font-semibold hover:bg-[#f6ead3] transition"
    >
      ← Back to Section-1
    </button>

    <button
      onClick={saveB}
      className="px-6 py-3 bg-[#0B6E4F] hover:bg-[#095d43] text-white rounded-xl shadow font-semibold transition"
    >
      Save Part-B
    </button>

  </div>

</div>

  );
}
