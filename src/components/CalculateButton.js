export default function CalculateButton({ onCalculate }) {
  return (
    <div className="text-center my-2">
      <button
        onClick={onCalculate}
        className="px-8 py-3 rounded shadow calculate-btn"
      >
        Calculate OEE
      </button>
    </div>
  );
}
