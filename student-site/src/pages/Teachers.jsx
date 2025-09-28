import React, { useEffect, useState } from "react";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    setTeachers(JSON.parse(localStorage.getItem("teachers")) || []);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Teachers</h2>
      <ul className="list-disc pl-6">
        {teachers.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teachers;
