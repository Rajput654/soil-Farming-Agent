import { useEffect, useState } from "react";

function App() {
  const [soils, setSoils] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/soil")
      .then(res => res.json())
      .then(data => setSoils(data));
  }, []);

  return (
    <div>
      <h1>Soil Farming Agent</h1>
      {soils.map((soil, index) => (
        <div key={index}>
          <h3>{soil.type}</h3>
          <p>{soil.description}</p>
          <p>pH: {soil.pHLevel}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
