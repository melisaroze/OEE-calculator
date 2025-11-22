import { Container, Card, Row, Col } from 'react-bootstrap';


export default function Features() {
  return (
    <Container className="m-3">
	    <Row className="justify-content-center g-4 m-2 p-2">
	        <Col md={4} className="mb-4 justify-content-center g-4">
	            <Card className="h-100 card-feature">
	            <img 
	            	src="data-analysis.png"
	            	className="img-feature mx-auto my-3"/>
	               <Card.Title>Quick OEE Calculation</Card.Title>
	               <Card.Body>Instant results with your data</Card.Body>
	            </Card>
	        </Col>       

	        <Col md={4} className="mb-4 justify-content-center g-4">
	            <Card className="h-100  card-feature">
	            <img 
	            	src="analytics.png"
	            	className="img-feature mx-auto my-3"/>
	               <Card.Title>Track Efficiency</Card.Title>
	               <Card.Body>Monitor production efficiency and identify bottlenecks at a glance.</Card.Body>
	            </Card>    
	        </Col>    

	        <Col md={4} className="mb-4 justify-content-center g-4">
	            <Card className="h-100 card-feature" >
	            <img 
	            	src="bar-chart.png"
	            	className="img-feature mx-auto my-3"/>
	               <Card.Title>Visual Dashboard</Card.Title>
	               <Card.Body>Graphs and charts make OEE metrics easy to interpret and share.</Card.Body>
	             </Card>      
	        </Col>
	    </Row>
	</Container>
	)
}
