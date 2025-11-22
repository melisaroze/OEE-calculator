import { useEffect, useState } from "react";

export default function AvailabilityForm({ onChange, value }) {
  const [planned, setPlanned] = useState("");
  const [downtime, setDowntime] = useState("");

  const update = () => {
    if (planned === "" || downtime === "") return;
    onChange("availability", {
      planned: Number(planned),
      downtime: Number(downtime),
    });
  };

  // Reset form when cleared
  useEffect(() => {
    if (!value) {
      setPlanned('');
      setDowntime('');
      onChange("availability", null);
    }
  }, [value, onChange]);

  return (
    <div className="bg-white p-4 rounded shadow mx-auto text-start mb-3">
      <h3 className="font-semibold mb-3">Availability</h3>

      <div>
      <label>Planned Production Time (mins):</label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-2"
        value={planned}
        placeholder="-"
        onChange={(e) => setPlanned(e.target.value)}
        onBlur={update}
      />
      </div>

      <div>
      <label>Downtime (mins):</label>
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={downtime}
        placeholder="-"
        onChange={(e) => setDowntime(e.target.value)}
        onBlur={update}
      />
      </div>
    </div>
  );
}