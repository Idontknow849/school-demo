import React, { useEffect, useState } from "react";

function Syllabus() {
  const [syllabus, setSyllabus] = useState([]);

  useEffect(() => {
    setSyllabus(JSON.parse(localStorage.getItem("syllabus")) || []);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Syllabus</h2>
      <ul className="list-disc pl-6">
        {syllabus.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Syllabus;
