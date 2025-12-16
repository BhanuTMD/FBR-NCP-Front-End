import React, { useState, useMemo } from "react";

const MAX_PROBLEM_WORDS = 100;
const MAX_ABSTRACT_WORDS = 300;
const MAX_KEYWORDS = 10;
const MAX_OUTCOME_WORDS = 150;

function wordCount(text = "") {
  const t = String(text || "").trim();
  if (!t) return 0;
  return t.split(/\s+/).filter(Boolean).length;
}

const Icon = {
  Plus: ({className=""}) => <span className={className}>+</span>,
  X: ({className=""}) => <span className={className}>×</span>,
  Save: ({className=""}) => <span className={className}>💾</span>,
  Check: ({className=""}) => <span className={className}>✔</span>,
};

export default function PartAExecutiveSummary({ onSaved }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    thematicArea: "",
    broadArea: "",
    lab: "",
    principalInvestigator: "rahulm.c@csir.res.in",
    participatingLabs: "",
    coPIs: [{ name: "", lab: "" }],
    fourPI: "",
    totalCostLakhs: "",
    projectDurationMonths: "",
    problemStatement: "",
    abstract: "",
    keywordsRaw: "",
    currentTRL: "",
    targetTRL: "",
    outcome: "",
  });

  const [errors, setErrors] = useState({});
  const [keywords, setKeywords] = useState([]);

  function updateField(name, value) {
    setForm(s => ({ ...s, [name]: value }));
    if (name === "keywordsRaw") {
      const parts = value.split(",").map(k => k.trim()).filter(Boolean);
      setKeywords(parts.slice(0, MAX_KEYWORDS));
    }
  }

  /* co-PI helpers */
  function updateCoPI(idx, key, value) {
    setForm(s => {
      const coPIs = (s.coPIs || []).map((c,i) => i===idx ? { ...c, [key]: value } : c);
      return { ...s, coPIs };
    });
  }
  function addCoPI() {
    setForm(s => ({ ...s, coPIs: [...(s.coPIs||[]), { name:"", lab:"" }] }));
  }
  function removeCoPI(idx) {
    setForm(s => ({ ...s, coPIs: (s.coPIs||[]).filter((_,i)=>i!==idx) }));
  }

  /* keywords helpers */
  function addKeyword(k) {
    const cleaned = (k||"").trim();
    if (!cleaned) return;
    if (keywords.includes(cleaned)) return;
    if (keywords.length >= MAX_KEYWORDS) return;
    const newKw = [...keywords, cleaned];
    setKeywords(newKw);
    setForm(s => ({ ...s, keywordsRaw: newKw.join(", ") }));
  }
  const counts = useMemo(() => ({
    problem: wordCount(form.problemStatement),
    abstract: wordCount(form.abstract),
    outcome: wordCount(form.outcome),
  }), [form.problemStatement, form.abstract, form.outcome]);

  function validate() {
    const e = {};
    if (!form.principalInvestigator) e.principalInvestigator = "PI is required";
    const hasCoPIName = (form.coPIs||[]).some(c => c.name && String(c.name).trim().length>0);
    if (!hasCoPIName) e.coPIs = "At least one Co-PI is required";
    if (form.totalCostLakhs && isNaN(Number(form.totalCostLakhs))) e.totalCostLakhs = "Enter a valid number";
    if (form.projectDurationMonths && (isNaN(Number(form.projectDurationMonths)) || Number(form.projectDurationMonths)<=0)) e.projectDurationMonths = "Enter valid months";

    if (counts.problem > MAX_PROBLEM_WORDS) e.problemStatement = `Limit ${MAX_PROBLEM_WORDS} words (currently ${counts.problem})`;
    if (counts.abstract > MAX_ABSTRACT_WORDS) e.abstract = `Limit ${MAX_ABSTRACT_WORDS} words (currently ${counts.abstract})`;
    if (counts.outcome > MAX_OUTCOME_WORDS) e.outcome = `Limit ${MAX_OUTCOME_WORDS} words (currently ${counts.outcome})`;
    if (keywords.length > MAX_KEYWORDS) e.keywords = `Maximum ${MAX_KEYWORDS} keywords allowed`;

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave(e) {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top:0, behavior: "smooth" });
      return;
    }
    const payload = { ...form, keywords };
    console.log("Part A saved payload:", payload);
    alert("Part A saved. Proceeding to Part B.");
    if (typeof onSaved === "function") onSaved(payload);
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">PART-A: EXECUTIVE SUMMARY</h2>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label>
              <div className="text-sm font-medium">Full Title of Proposal</div>
              <input value={form.title} onChange={e=>updateField("title", e.target.value)} className="mt-2 w-full border rounded px-3 py-2" />
            </label>

            <label>
              <div className="text-sm font-medium">Lab</div>
              <input value={form.lab} onChange={e=>updateField("lab", e.target.value)} className="mt-2 w-full border rounded px-3 py-2" />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label>
              <div className="text-sm font-medium">Category</div>
              <select value={form.category} onChange={e=>updateField("category", e.target.value)} className="mt-2 w-full border rounded px-3 py-2">
                <option value="">Choose…</option>
                <option value="research">Research</option>
                <option value="development">Development</option>
                <option value="demonstration">Demonstration</option>
                <option value="others">Others</option>
              </select>
            </label>

            <label>
              <div className="text-sm font-medium">Thematic Area</div>
              <select value={form.thematicArea} onChange={e=>updateField("thematicArea", e.target.value)} className="mt-2 w-full border rounded px-3 py-2">
               <option value="">Choose…</option>
               <option value="energy">Energy</option>
               <option value="environment">Environment</option>
               <option value="health">Health</option>
               <option value="agri">Agriculture</option>
              </select>
            </label>

            <label>
              <div className="text-sm font-medium">Broad Area</div>
              <select value={form.broadArea} onChange={e=>updateField("broadArea", e.target.value)} className="mt-2 w-full border rounded px-3 py-2">
               <option value="">Choose…</option>
               <option value="water">Water</option>
               <option value="waste">Waste</option>
               <option value="materials">Materials</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label>
              <div className="text-sm font-medium">Principal Investigator (PI)</div>
              <input value={form.principalInvestigator} onChange={e=>updateField("principalInvestigator", e.target.value)} className="mt-2 w-full border rounded px-3 py-2 bg-slate-50" />
              {errors.principalInvestigator && <div className="text-rose-600 text-sm mt-1">{errors.principalInvestigator}</div>}
            </label>
            <div />
            <div />
          </div>

          {/* Co-PIs pairs */}
          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Co-PIs and their Labs</div>
              <button type="button" onClick={addCoPI} className="px-3 py-2 bg-indigo-600 text-white rounded">Add Co-PI</button>
            </div>

            <div className="mt-3 space-y-3">
              {(form.coPIs||[]).map((c, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                  <div>
                    <label className="text-xs">Co-PI Name</label>
                    <input value={c.name} onChange={e=>updateCoPI(idx,"name", e.target.value)} className="mt-1 w-full border rounded px-3 py-2" placeholder="Name or email" />
                  </div>
                  <div>
                    <label className="text-xs">Co-PI Lab</label>
                    <input value={c.lab} onChange={e=>updateCoPI(idx,"lab", e.target.value)} className="mt-1 w-full border rounded px-3 py-2" placeholder="Lab" />
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={()=>removeCoPI(idx)} className="px-3 py-2 border rounded text-rose-600">Remove</button>
                  </div>
                </div>
              ))}
              {errors.coPIs && <div className="text-rose-600 text-sm mt-1">{errors.coPIs}</div>}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium">Defining the Problem (100 words max)</div>
            <textarea value={form.problemStatement} onChange={e=>updateField("problemStatement", e.target.value)} rows={4} className="mt-2 w-full border rounded px-3 py-2" />
            <div className="text-xs text-slate-500 mt-1">{counts.problem}/{MAX_PROBLEM_WORDS} words</div>
            {errors.problemStatement && <div className="text-rose-600 text-sm mt-1">{errors.problemStatement}</div>}
          </div>

          <div>
            <div className="text-sm font-medium">Abstract (300 words max)</div>
            <textarea value={form.abstract} onChange={e=>updateField("abstract", e.target.value)} rows={6} className="mt-2 w-full border rounded px-3 py-2" />
            <div className="text-xs text-slate-500 mt-1">{counts.abstract}/{MAX_ABSTRACT_WORDS} words</div>
            {errors.abstract && <div className="text-rose-600 text-sm mt-1">{errors.abstract}</div>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <label className="sm:col-span-2">
              <div className="text-sm font-medium">Keywords (comma separated)</div>
              <input value={form.keywordsRaw} onChange={e=>updateField("keywordsRaw", e.target.value)} placeholder="Enter keywords" className="mt-2 w-full border rounded px-3 py-2" />
              <div className="text-xs text-slate-500 mt-1">Preview: {keywords.join(", ") || "—"}</div>
            </label>
            <div className="flex gap-2">
              <button type="button" onClick={()=>addKeyword(prompt("Add keyword"))} className="px-3 py-2 border rounded">Add</button>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium">Outcome (150 words max)</div>
            <textarea value={form.outcome} onChange={e=>updateField("outcome", e.target.value)} rows={4} className="mt-2 w-full border rounded px-3 py-2" />
            <div className="text-xs text-slate-500 mt-1">{counts.outcome}/{MAX_OUTCOME_WORDS} words</div>
            {errors.outcome && <div className="text-rose-600 text-sm mt-1">{errors.outcome}</div>}
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button type="button" onClick={()=>{ navigator.clipboard?.writeText(JSON.stringify({...form, keywords})); alert("Copied JSON"); }} className="px-4 py-2 border rounded">Export</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded"><Icon.Save /> Save Part A & Go to Part B</button>
          </div>
        </form>
      </div>
    </div>
  );
}
