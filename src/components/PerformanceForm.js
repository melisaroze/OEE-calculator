import { useState } from "react";

export default function PerformanceForm({ onChange }) {
  const [ideal, setIdeal] = useState("");
  const [units, setUnits] = useState("");
  const [runtime, setRuntime] = useState("");

  const update = () => {
    if (ideal === "" || units === "" || runtime === "") return;
    onChange("performance", {
      ideal: Number(ideal),
      units: Number(units),
      runTime: Number(runtime),
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow text-start mt-2 mx-auto">
      <h3 className="font-semibold mb-3">Performance</h3>

      <div>
      <label>Ideal Cycle Time (mins)</label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-3"
        value={ideal}
        onChange={(e) => setIdeal(e.target.value)}
        onBlur={update}
      />
      </div>

      <div>
      <label>Units Produced</label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-3"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
        onBlur={update}
      />
      </div>

      <div>
      <label>Runtime (mins)</label>
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={runtime}
        onChange={(e) => setRuntime(e.target.value)}
        onBlur={update}
      />
      </div>
    </div>
  );
}
