import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer">
                <Row className="justify-content-center" noGutters>
                    <Col xs="12" md="6">
                        <ul style={{listStyleType: "none"}}>
                            <li><Link to="/" style={{textDecoration: "none"}}>Home</Link></li>
                            <li><Link to="/order" style={{textDecoration: "none"}}>Order Now</Link></li>
                            <li><Link to="/contact" style={{textDecoration: "none"}}>Contact</Link></li>
                        </ul>
                    </Col>
                    <Col xs="12" md="6" className="justify-content-center side-section">
                        <Row className="justify-content-center">
                            <Col xs="12" md="6">Follow us on social media</Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs="12" md="6">
                                <ul style={{listStyleType: "none"}} >
                                    <li><a href="/">Google+</a></li>
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">Instagram</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    Copyright &copy; 2021. All rights reserved
                </Row>
        </footer>
    );
}

export default Footer;