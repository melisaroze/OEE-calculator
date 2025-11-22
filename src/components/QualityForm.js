import { useState } from "react";

export default function QualityForm({ onChange }) {
  const [good, setGood] = useState("");
  const [rejects, setRejects] = useState("");

  const update = () => {
    if (good === "" || rejects === "") return;
    onChange("quality", {
      good: Number(good),
      rejects: Number(rejects),
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-2 mx-auto text-start">
      <h3 className="font-semibold mb-3">Quality</h3>

      <div>
      <label>Good Units</label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-3"
        value={good}
        onChange={(e) => setGood(e.target.value)}
        onBlur={update}
      />
      </div>

      <div>
      <label>Rejects</label>
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={rejects}
        onChange={(e) => setRejects(e.target.value)}
        onBlur={update}
      />
      </div>
    </div>
  );
}
