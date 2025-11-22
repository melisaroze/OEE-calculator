import React from "react";

const HelpPage = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Help – Understanding OEE</h1>

      <section className="mb-4">
        <h2>What is OEE?</h2>
        <p>
          Overall Equipment Effectiveness (OEE) is a metric used to measure how efficiently a manufacturing operation is performing. 
          It considers <strong>availability, performance, and quality</strong> to give a percentage that shows the effectiveness of your equipment.
        </p>
      </section>

      <section className="mb-4">
        <h2>OEE Components</h2>
        <ul>
          <li>
            <strong>Availability:</strong> Measures how much time the equipment is actually running vs. planned production time.  
            <br />
            <em>Example:</em> If a machine is scheduled to run for 8 hours but stops for 1 hour due to maintenance, Availability = 87.5%.
          </li>
          <li>
            <strong>Performance:</strong> Measures whether the equipment is producing at its maximum speed.  
            <br />
            <em>Example:</em> If a machine can produce 100 units/hour but only produces 80, Performance = 80%.
          </li>
          <li>
            <strong>Quality:</strong> Measures how many units are produced without defects.  
            <br />
            <em>Example:</em> If 100 units are produced and 10 are defective, Quality = 90%.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>OEE Calculation</h2>
        <p>
          <strong>Formula:</strong> <br />
          <code>OEE = Availability × Performance × Quality</code>
        </p>
        <p>
          <em>Example:</em> 87.5% × 80% × 90% = 63%
        </p>
      </section>

      <section className="mb-4">
        <h2>Why OEE Matters</h2>
        <ul>
          <li>Helps identify bottlenecks in production</li>
          <li>Shows areas for improvement</li>
          <li>Tracks maintenance and efficiency over time</li>
        </ul>
      </section>

      <section>
        <h2>Tips for Using This App</h2>
        <ul>
          <li>Enter <strong>planned production time</strong> and <strong>downtime</strong> for accurate OEE</li>
          <li>Input <strong>actual output</strong> and <strong>defective units</strong></li>
          <li>Use the graphs to track trends over days, weeks, or months</li>
        </ul>
      </section>
    </div>
  );
};

export default HelpPage;
