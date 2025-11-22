import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import FeatureSection from "../components/FeatureSection";

export default function Home() {


return (
<Container fluid className="homepage">
    <Row>
        <section className="m-3 p-2">
                <h1 className="p-2">Optimize Your Manufacturing Performance</h1>
                <h5 className="p-2">“Calculate Availability, Performance, and Quality in real-time with our OEE Calculator”</h5>
                <Link className="btn border border-dark p-3 m-3 cta" to={"/oeecalculator"}>Start Calculating</Link>
       </section>

    <FeatureSection />
</Row>
</Container>
    )
}