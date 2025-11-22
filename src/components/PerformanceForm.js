import { useEffect, useState } from "react";

export default function PerformanceForm({ onChange, value }) {
  const [ideal, setIdeal] = useState("");
  const [units, setUnits] = useState("");
  const [runTime, setRunTime] = useState("");

  const update = () => {
    if (ideal === "" || units === "" || runTime === "") return;
    onChange("performance", {
      ideal: Number(ideal),
      units: Number(units),
      runTime: Number(runTime),
    });
  };

  useEffect(() => {
    if (!value) {
      setIdeal('');
      setUnits('');
      setRunTime('');
      onChange("performance", null);
    }
  }, [value, onChange]);

  return (
    <div className="bg-white p-4 rounded shadow mx-auto text-start mb-3">
      <h3 className="font-semibold mb-3">Performance</h3>

      <div>
      <label>Ideal Cycle Time (mins/unit):</label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-2"
        value={ideal}
        onChange={(e) => setIdeal(e.target.value)}
        onBlur={update}
      />
      </div>

      <div>
      <label>Units Produced:</label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-2"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
        onBlur={update}
      />
      </div>

      <div>
      <label>Run Time (mins):</label>
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={runTime}
        onChange={(e) => setRunTime(e.target.value)}
        onBlur={update}
      />
      </div>
    </div>
  );
}
