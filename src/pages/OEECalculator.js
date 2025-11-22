import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvailabilityForm from "../components/AvailabilityForm";
import PerformanceForm from "../components/PerformanceForm";
import QualityForm from "../components/QualityForm";
import CalculateButton from "../components/CalculateButton";
import ResultsCard from "../components/ResultsCard";

export default function OEECalculator() {

  const [availabilityData, setAvailabilityData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [qualityData, setQualityData] = useState(null);

  const [availability, setAvailability] = useState(0);
  const [performance, setPerformance] = useState(0);
  const [quality, setQuality] = useState(0);
  const [oee, setOee] = useState(0);

  const handleFormChange = (type, values) => {
    if (type === "availability") setAvailabilityData(values);
    if (type === "performance") setPerformanceData(values);
    if (type === "quality") setQualityData(values);
  };

  const calculateOEE = () => {
    if (!availabilityData || !performanceData || !qualityData) return;

    const av = ((availabilityData.planned - availabilityData.downtime) / availabilityData.planned) * 100;
    const pf = ((performanceData.ideal * performanceData.units) / (performanceData.runTime)) * 100;
    const ql = (qualityData.good / (qualityData.good + qualityData.rejects)) * 100;

    setAvailability(av);
    setPerformance(pf);
    setQuality(ql);

    setOee((av * pf * ql) / 10000);
  };

  const handleClear = () => {
    setAvailabilityData(null);
    setPerformanceData(null);
    setQualityData(null);
    setAvailability(0);
    setPerformance(0);
    setQuality(0);
    setOee(0);
  };

    const exportToCSV = () => {
    if (!availabilityData && !performanceData && !qualityData) return;

    const header = ["Type", "Field", "Value"];
    const rows = [];

    if (availabilityData) {
      rows.push(["Availability", "Planned", availabilityData.planned]);
      rows.push(["Availability", "Downtime", availabilityData.downtime]);
    }
    if (performanceData) {
      rows.push(["Performance", "Ideal", performanceData.ideal]);
      rows.push(["Performance", "Units", performanceData.units]);
      rows.push(["Performance", "Run Time", performanceData.runTime]);
    }
    if (qualityData) {
      rows.push(["Quality", "Good Units", qualityData.good]);
      rows.push(["Quality", "Rejected Units", qualityData.rejects]);
    }

    // Add calculated results
    rows.push(["Result", "Availability", availability.toFixed(2)]);
    rows.push(["Result", "Performance", performance.toFixed(2)]);
    rows.push(["Result", "Quality", quality.toFixed(2)]);
    rows.push(["Result", "OEE", oee.toFixed(2)]);

    const csvContent = [header, ...rows].map(e => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "oee_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
    <Row>

    <div className="oeecalculator text-center m-2">
      <h2 className="p-2">OEE Calculator</h2>
      <h5 className="p-2 mb-2">Availability | Performance | Quality</h5>
    </div>

    <Col className="lg-6">
    

      <div className="gap-2">
        <AvailabilityForm 
            onChange={handleFormChange}
            value={availabilityData} />

        <PerformanceForm 
            onChange={handleFormChange}
            value={performanceData} />

        <QualityForm 
            onChange={handleFormChange}
            value={qualityData} />
      </div>

      <CalculateButton 
        onCalculate={calculateOEE}
        onClear={handleClear}
        disabled={!availabilityData || !performanceData || !qualityData} />
      <button 
        className="btn btn-success mb-3 w-100 px-8 py-2" 
        onClick={exportToCSV}
        disabled={!availabilityData && !performanceData && !qualityData}
        >
        Export CSV
      </button>
    </Col>

    <Col className="lg-6">
      <ResultsCard
        availability={availability}
        performance={performance}
        quality={quality}
        oee={oee}
      />
    </Col>
   
  </Row>
  </Container>
  );
}
