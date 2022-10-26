import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserAlt } from "react-icons/fa";




const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Navbar className='mb-4 drop-shadow-xl' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <img className='' src={logo} style={{ width: 100, marginTop: -7 }} />
                <Navbar.Brand href="#home" className="text-primary fw-bold">

                    Learning Management System

                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/courses' className="text-primary fw-bold mt-2 me-2">Courses</Link>
                        <Link to='/faq' className="text-primary fw-bold mt-2">FAQ</Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
                        <Nav.Link href="#deets">
                            {user?.photoURL ?

                                <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                :
                                <FaUserAlt></FaUserAlt>
                            }
                        </Nav.Link>
                        <Link to='/login'> <Button variant="outline-primary" className='me-2'>Login</Button></Link>
                        <Button variant="outline-dark">Light/Dark</Button>
                        <Nav.Link className="text-primary fw-bold">
                            <Link to='/blog' >Blog</Link>
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
