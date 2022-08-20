import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const[user] = useAuthState(auth)

    const handleSignOut =() => {
        signOut(auth);
    }



    return (
        <>


            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link}to="/">
                      
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Learning Birds</Nav.Link>
                            <Nav.Link href="#services ">Course</Nav.Link>
                            <Nav.Link href="#teachers">Teachers</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                        
                        </Nav>
                        <Nav>
                            
                            {   
                              
                                  user ?
                                  <button className='btn btn-dark text-white' onClick={handleSignOut}>Sign Out</button>
                                  : 
                                <Nav.Link as={Link} to="login">
                               Login 
                            </Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;