import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Results from "./pages/Results";
import Syllabus from "./pages/Syllabus";
import Fees from "./pages/Fees";
import Teachers from "./pages/Teachers";
import Routine from "./pages/Routine";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Results />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/routine" element={<Routine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
