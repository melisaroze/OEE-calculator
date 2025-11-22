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
            onChange={handleFormChange} />

        <PerformanceForm 
            onChange={handleFormChange} />

        <QualityForm 
            onChange={handleFormChange} />
      </div>

      <CalculateButton onCalculate={calculateOEE} />
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
