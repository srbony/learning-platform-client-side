import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo.jpg';
import LeftSideNav from '../LeftSideNav/LeftSideNav';



const Header = () => {
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home" className="text-primary fw-bold">
                    <img className='h-6' src={logo} style={{ width: 100, marginTop: -7 }} />
                    Learning Management System

                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features" className="text-primary fw-bold">Courses</Nav.Link>
                        <Nav.Link href="#pricing" className="text-primary fw-bold">FAQ</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className="text-primary fw-bold">
                            Blog
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>

                        <LeftSideNav></LeftSideNav>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
