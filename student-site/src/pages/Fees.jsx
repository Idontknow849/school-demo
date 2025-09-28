import React, { useEffect, useState } from "react";

function Fees() {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    setFees(JSON.parse(localStorage.getItem("fees")) || []);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Fee Structure</h2>
      <ul className="list-disc pl-6">
        {fees.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fees;
