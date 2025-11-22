import OEEChart from './OEEChart';

export default function ResultsCard({ availability, performance, quality, oee }) {
  return (
    <div className="bg-white p-6 rounded shadow mx-auto text-center">
      <h3 className="fw-bold mb-4 p-2 text-primary">Results</h3>

      <p>Availability: <strong>{availability.toFixed(2)}%</strong></p>
      <p>Performance: <strong>{performance.toFixed(2)}%</strong></p>
      <p>Quality: <strong>{quality.toFixed(2)}%</strong></p>

      <hr className="my-3" />

      <p className="results fw-bold">
        OEE Score: {oee.toFixed(2)}%
      </p>

      <div className="d-flex justify-content-center w-100">
      <OEEChart
        availability={availability}
        performance={performance}
        quality={quality}
        />
      </div>
    </div>
  );
}
