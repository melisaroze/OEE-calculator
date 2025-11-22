import { useEffect, useState } from "react";

export default function QualityForm({ onChange, value }) {
  const [good, setGood] = useState("");
  const [rejects, setRejects] = useState("");

  const update = () => {
    if (good === "" || rejects === "") return;
    onChange("quality", {
      good: Number(good),
      rejects: Number(rejects),
    });
  };

  useEffect(() => {
    if (!value) {
      setGood('');
      setRejects('');
      onChange("quality", null);
    }
  }, [value, onChange]);

  return (
    <div className="bg-white p-4 rounded shadow mx-auto text-start mb-3">
      <h3 className="font-semibold mb-3">Quality</h3>

      <div>
      <label>Good Units:</label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-2"
        value={good}
        onChange={(e) => setGood(e.target.value)}
        onBlur={update}
      />
      </div>

      <div>
      <label>Rejected Units:</label>
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
