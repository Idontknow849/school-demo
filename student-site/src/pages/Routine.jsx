import React, { useEffect, useState } from "react";

function Routine() {
  const [routine, setRoutine] = useState([]);

  useEffect(() => {
    setRoutine(JSON.parse(localStorage.getItem("routine")) || []);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Class & Exam Routine</h2>
      <ul className="list-disc pl-6">
        {routine.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default Routine;
