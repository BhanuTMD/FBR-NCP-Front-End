import React from "react";

export default function ProposalPrint() {

  const partA = JSON.parse(localStorage.getItem("partAdata"));
  const partB = JSON.parse(localStorage.getItem("partBdata"));

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold">CFP Full Report</h1>

      <h2 className="text-xl font-bold mt-6">Part-A</h2>
      <pre>{JSON.stringify(partA, null, 2)}</pre>

      <h2 className="text-xl font-bold mt-6">Part-B</h2>
      <pre>{JSON.stringify(partB, null, 2)}</pre>

    </div>
  );
}
