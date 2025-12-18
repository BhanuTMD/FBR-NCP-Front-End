import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PartAExecutiveSummary from "./PartAExecutiveSummary";
import PartBProposalDetails from "./PartBProposalDetails";

export default function ProposalForms() {

    const navigate = useNavigate();   // <<< ADDED
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
        const final = { 
            partA: partAData, 
            partB: payload.partB || payload 
        };

        console.log("Final payload:", final);
        alert("Saved both parts. Replace console output with API call.");
    }

    return (
        <div className="w-full">

            {/* ---------- Header Action Buttons ---------- */}
            <div className="flex justify-between items-center p-4 print:hidden">

                {/* HOME BUTTON */}
                <button
                    onClick={() => navigate("/")}
                    className="px-4 py-2 border rounded text-blue-600 hover:bg-blue-100"
                >
                    ← Back to Home
                </button>

                {/* PRINT BUTTON */}
                <button
                    onClick={() => {
                        document.title = `CFP_${partAData?.title || "Proposal"}`;
                        window.print();
                    }}
                    className="px-4 py-2 bg-green-700 text-white rounded"
                >
                    🖨 Print Full Proposal
                </button>

            </div>

            {/* ---------- Printable Area Wrapper ---------- */}
            <div id="print-root">

                {/* ---------- PRINT VERSION ALWAYS SHOW BOTH ---------- */}
                <div className="hidden print:block">
                    <h1 className="text-xl font-bold mb-4 text-center">
                        CFP Proposal Full Report
                    </h1>

                    <PartAExecutiveSummary readOnlyData={partAData} />

                    <hr className="my-6 border-black" />

                    <PartBProposalDetails
                        initialPartA={partAData}
                        readOnly
                    />
                </div>

                {/* ---------- NORMAL SCREEN VIEW ---------- */}
                <div className="print:hidden">
                    {!showPartB ? (
                        <PartAExecutiveSummary
                            onSaved={handlePartASaved}
                            onDirectNext={() => setShowPartB(true)}
                        />
                    ) : (
                        <PartBProposalDetails
                            initialPartA={partAData}
                            onBack={handleBack}
                            onSave={handlePartBSave}
                        />
                    )}
                </div>

            </div>

        </div>
    );
}
