import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">MJK School</h1>
      <div className="space-x-4">
        <Link to="/">Results</Link>
        <Link to="/syllabus">Syllabus</Link>
        <Link to="/fees">Fees</Link>
        <Link to="/teachers">Teachers</Link>
        <Link to="/routine">Routine</Link>
      </div>
    </nav>
  );
}

export default Navbar;
