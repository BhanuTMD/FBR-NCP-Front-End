import { Routes, Route } from "react-router-dom";
// import PartAExecutiveSummary from "./components/CFP/PartAExecutiveSummary.jsx";
// import PartBProposalDetails from "./components/CFP/PartBProposalDetails.jsx";
// import PartCProposalDetails from "./components/CFP/PartCProposalDetails.jsx";
import WelcomePage from "./components/pages/WelcomePage.jsx";
import NavBar from "./components/common/NavBar.jsx";
import ProposalForms from "./components/CFP/ProposalForms.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<WelcomePage />} />
      <Route path="/add-cfp" element={<PartAExecutiveSummary />} />
      <Route path="/add-cfp/part-b" element={<PartBProposalDetails />} />
      <Route path="add-cfp/part-c" element={<PartCProposalDetails />} />
      <Route path="/navbar" element={<NavBar />} /> */}
      {/* Landing Page */}
      <Route path="/" element={<WelcomePage />} />

      {/* Add CFP Master Form */}
      <Route path="/add-cfp" element={<ProposalForms />} />

      {/* Optional Navbar Page */}
      <Route path="/navbar" element={<NavBar />} />

      {/* Fallback Not Found */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}
