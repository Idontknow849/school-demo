import React, { useState } from "react";

function Dashboard() {
  const [results, setResults] = useState(JSON.parse(localStorage.getItem("results")) || []);
  const [syllabus, setSyllabus] = useState(JSON.parse(localStorage.getItem("syllabus")) || []);
  const [fees, setFees] = useState(JSON.parse(localStorage.getItem("fees")) || []);
  const [teachers, setTeachers] = useState(JSON.parse(localStorage.getItem("teachers")) || []);
  const [routine, setRoutine] = useState(JSON.parse(localStorage.getItem("routine")) || []);

  const addItem = (key, state, setState) => {
    const newItem = prompt(`Enter new ${key}:`);
    if (newItem) {
      const updated = [...state, newItem];
      setState(updated);
      localStorage.setItem(key, JSON.stringify(updated));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-bold">Results</h2>
          <button onClick={() => addItem("results", results, setResults)} className="bg-green-500 text-white px-2 py-1 rounded">Add</button>
          <ul>{results.map((r, i) => <li key={i}>{r}</li>)}</ul>
        </section>

        <section>
          <h2 className="text-lg font-bold">Syllabus</h2>
          <button onClick={() => addItem("syllabus", syllabus, setSyllabus)} className="bg-green-500 text-white px-2 py-1 rounded">Add</button>
          <ul>{syllabus.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </section>

        <section>
          <h2 className="text-lg font-bold">Fees</h2>
          <button onClick={() => addItem("fees", fees, setFees)} className="bg-green-500 text-white px-2 py-1 rounded">Add</button>
          <ul>{fees.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </section>

        <section>
          <h2 className="text-lg font-bold">Teachers</h2>
          <button onClick={() => addItem("teachers", teachers, setTeachers)} className="bg-green-500 text-white px-2 py-1 rounded">Add</button>
          <ul>{teachers.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </section>

        <section>
          <h2 className="text-lg font-bold">Routine</h2>
          <button onClick={() => addItem("routine", routine, setRoutine)} className="bg-green-500 text-white px-2 py-1 rounded">Add</button>
          <ul>{routine.map((r, i) => <li key={i}>{r}</li>)}</ul>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
