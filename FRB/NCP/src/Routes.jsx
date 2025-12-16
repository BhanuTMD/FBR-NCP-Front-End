// src/Routes.jsx
import { Routes, Route } from "react-router-dom";
import AddCFP from "./components/CFP.jsx/Part-A-ExecutiveSummary";
import WelcomePage from "./components/pages/WelcomePage";
import React from "react";
import NavBar from "./components/common/NavBar";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      {/* <Route path="/add-cfp" element={<ProposalForms />} /> */}
         <Route path="/add-cfp" element={<PartAExecutiveSummary />} />
      <Route path="/add-cfp/part-b" element={<PartBProposalDetails />} />
      <Route path="/add-cfp/part-b" element={<PartBProposalDetails />} />
      <Route path="/navbar" element={<NavBar />} />
    </Routes>
  );
}
