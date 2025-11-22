import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';


export default function AppNavbar() {

	return(
		<Navbar expand="lg" className="shadow-sm py-3 navbar bg-dark">
			<Container fluid>
			    <Navbar.Brand 
			    as={Link} to="/"
			    className="text-white">OEE Calculator</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ms-auto d-flex align-items-center gap-2">
                        
                        <Nav.Link 
                            as={NavLink} 
                            to="/help"
                            exact="true"><i className="bi bi-question-circle fs-3"></i></Nav.Link>
								
				    </Nav>
			    </Navbar.Collapse>
			</Container>
		</Navbar>
		)
}