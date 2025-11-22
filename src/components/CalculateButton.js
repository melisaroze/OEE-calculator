export default function CalculateButton({ onCalculate, disabled, onClear }) {

  return (
    <div className="text-center my-2 d-flex justify-content-center gap-3">
      <button
        onClick={onCalculate}
        disabled={disabled}
        className="px-8 py-3 rounded shadow btn btn-primary w-50"
      >
        Calculate OEE
      </button>

      <button
        onClick={onClear}
        className="px-8 py-3 rounded shadow btn btn-danger w-50"
      >
        Clear
      </button>

    </div>
  );
}
