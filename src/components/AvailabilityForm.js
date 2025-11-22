import { useState } from "react";

export default function AvailabilityForm({ onChange }) {
  const [planned, setPlanned] = useState("");
  const [downtime, setDowntime] = useState("");

  const update = () => {
    if (planned === "" || downtime === "") return; // wait until valid
    onChange("availability", {
      planned: Number(planned),
      downtime: Number(downtime),
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow mx-auto text-start">
      
      <h3 className="font-semibold mb-3">Availability</h3>

      <div>
      <label>Planned Production Time (mins): </label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-3"
        value={planned}
        onChange={(e) => setPlanned(e.target.value)}
        onBlur={update}
      />
      </div>

      <label>Downtime (mins): </label>
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={downtime}
        onChange={(e) => setDowntime(e.target.value)}
        onBlur={update}
      />
    </div>
  );
}
