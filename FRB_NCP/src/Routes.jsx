import { Routes, Route } from "react-router-dom";

import WelcomePage from "./components/pages/WelcomePage.jsx";
import PartAExecutiveSummary from "./components/CFP_Form/PartAExecutiveSummary.jsx";
import PartBSection1Page from "./components/CFP_Form/PartBSection1Page.jsx";
import PartBSection2Page from "./components/CFP_Form/PartBSection2Page.jsx";
import ProposalPrint from "./components/CFP_Form/ProposalPrint.jsx";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<WelcomePage />} />

      {/* PART A */}
      <Route path="/add-cfp/partAExecutiveSummary" element={<PartAExecutiveSummary />} />

      {/* PART B */}
      <Route path="/add-cfp/partBSection1Page" element={<PartBSection1Page />} />
      <Route path="/add-cfp/partBSection2Page" element={<PartBSection2Page />} />

      {/* PRINT */}
      <Route path="/add-cfp/print" element={<ProposalPrint />} />

      {/* FALLBACK */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />

    </Routes>
  );
}
