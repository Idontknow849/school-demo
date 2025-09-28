import React, { useEffect, useState } from "react";

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(JSON.parse(localStorage.getItem("results")) || []);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Results</h2>
      <ul className="list-disc pl-6">
        {results.map((res, i) => (
          <li key={i}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
