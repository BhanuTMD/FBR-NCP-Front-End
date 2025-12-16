// src/components/NavBar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  // Close dropdown when route changes
  useEffect(() => {
    
  }, [location]);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="brand">MyApp</div>
      </div>

      <div className="nav-right" ref={containerRef}>
        <div className="nav-item dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
          >
            Proposal ▾
          </button>

          {open && (
            <div className="dropdown-menu">
             <Link to="/add-cfp" className="dropdown-link">Add CFP</Link>

              {/* future items can be added below */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 
export default NavBar;
