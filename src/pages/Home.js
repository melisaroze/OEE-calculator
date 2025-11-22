import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FeatureSection from "../components/FeatureSection";

export default function Home() {
  return (
    <Container fluid className="homepage p-0">
      {/* Hero Section */}
      <Row className="hero-section ">
        <Col xs={12} className="text-center d-flex flex-column justify-content-center align-items-center">
          <h1 className="hero-title mb-3">Optimize Your Manufacturing Performance</h1>
          <h5 className="hero-subtitle mb-4">
            “Calculate Availability, Performance, and Quality in real-time with our OEE Calculator”
          </h5>
          <Link
            className="btn border border-dark p-3 cta"
            to={"/oeecalculator"}
          >
            Start Calculating
          </Link>
        </Col>
      </Row>

      {/* Features Section */}
      <Row>
        <Col xs={12} className="text-center d-flex justify-content-center">
          <FeatureSection />
        </Col>
      </Row>
    </Container>
  );
}
