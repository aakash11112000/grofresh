import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = () => {
    return(
        <div>
            <Navbar collapseOnSelect variant="dark" bg="dark" expand="md">
                <Container>
                    <LinkContainer to="/"><Navbar.Brand href="/" className="navbar-brand">GroFresh</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav variant="dark pills">
                            <Nav.Item><LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer></Nav.Item>
                            <Nav.Item><LinkContainer to="/order"><Nav.Link>Order</Nav.Link></LinkContainer></Nav.Item>
                            <Nav.Item><LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;