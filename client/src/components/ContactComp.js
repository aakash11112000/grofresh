import React, {useState} from 'react';
import { Jumbotron, Row, Col, Container, Form, Button, Alert } from 'react-bootstrap';
import contactBgImage from '../assets/contactUsImg.jpg';

import NavBar from './NavbarComp';
import Footer from './FooterComp';

const serverPort = 5000;
const postUrl = `http://localhost:${serverPort}/api/contact/add`;

const Contact = () => {
    const [formState, changeFormState] = useState({
      name: '',
      email: '',
      phone: '',
      description: ''
    });

    const [formAlert, setAlert] = useState(false);

    const onSubmit = async () => {
      console.log('formState is: ',formState);
      const res = await fetch(postUrl, {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(res.json());
      setAlert(true);
      changeFormState({
        name: '',
        email: '',
        phone: '',
        description: ''
      })
    }

    return(
      <div className="contact-comp-container">
        <NavBar />
  
        <Jumbotron className="contact-jumbotron" fluid 
        style={{backgroundImage: `url(${contactBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <Container fluid className="contact-jumbotron-text">
            <Row noGutters>
              <Col xs={12} md={5}>
                <h1 className="display-2">Contact Us</h1>
              </Col>
            </Row>
            <Row noGutters>
              <Col xs={12} md={6}>
                <p className="lead">Our team of technicians are always ready to help.</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
  
        <Container fluid className="contact-container">
          <Row noGutters className="contact-header">
            <h2 className="col-12">Let's have a conversation</h2>
          </Row>
          <Row noGutters className="contact-body">
            <Col xs={12} md={5} className="side-1">
              <Row noGutters>
                <Col>
                  <h3>Take a quick tour</h3>
                  <p>Before we earn your trust, have a quick look at our services. Feel free to get in touch with us to arrange a demo.</p>
                </Col>
              </Row>
              <Row noGutters>
                <Col>
                  <h3>Our Locations</h3>
                  <address>
                    <strong>Headquarters: </strong><br />
                    No. 27, Rippon Buildings<br />
                    Chennai, Tamil Nadu <br />
                    India
                  </address>
                  <address>
                    <strong>Branch Office: </strong><br />
                    No. 49, Koramangala Avenue<br />
                    Bangalore, Karnataka<br />
                    India
                  </address>
                </Col>
              </Row>
              <Row noGutters>
                <Col>
                  <h3>Contact</h3>
                  <p>For any complaints: <a href="/">+123 456 7890</a></p>
                  <p>For any product-related queries: <a href="/">+987 654 3210</a></p>
                  <p>Email us at <a href="/">customer.relations@grofresh.com</a></p>
                </Col>
              </Row>
            </Col>
            <div className="contact-sides-border col-1 d-none d-md-block" />
            <div className="d-xs-block d-md-none" style={{marginBottom: "20px", textAlign: "center"}}>
              <strong><i>Or drop us your queries and we shall get in touch with you</i></strong>
            </div>
            <Col className="side-2 col-12 col-md-6 offset-md-1">
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="contact-name" xs={12} md={2}>Name: </Form.Label>
                  <Col xs={12} md={10} style={{width: "90%"}}>
                    <Form.Control placeholder="Your name" value={formState.name} onChange={e => changeFormState({...formState, name: e.target.value})} />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label htmlFor="contact-email" xs={12} md={2}>Email: </Form.Label>
                  <Col xs={12} md={10} style={{width: "90%"}}>
                    <Form.Control type="email" placeholder="Email id" value={formState.email} onChange={e => changeFormState({...formState, email: e.target.value})} />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label htmlFor="contact-number" xs={12} md={2}>Phone: </Form.Label>
                  <Col xs={12} md={10} style={{width: "90%"}}>
                    <Form.Control type="phone" placeholder="Phone Number" value={formState.phone} onChange={e => changeFormState({...formState, phone: e.target.value})} />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label htmlFor="contact-comments" xs={12} md={2}>Description: </Form.Label>
                  <Col xs={12} md={10} style={{width: "90%"}}>
                    <Form.Control as="textarea" rows="8" placeholder="Comments/Feedback" value={formState.description} onChange={e => changeFormState({...formState, description: e.target.value})} />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group check="true" className="contact-form-check" style={{width: "90%"}}>
                  <Form.Check type="checkbox" label="I consent to give my details to GroFresh for analytics purposes."/>
                  <Form.Check type="checkbox" label="GroFresh can contact me regarding events and offers."/>
                </Form.Group>
                <Col className="contact-button">
                  <Button variant="primary" onClick={onSubmit}>Submit</Button>     
                </Col>
                {formAlert && 
                  <Alert variant="success">
                    <p>Thank you for your feedback. Our customer service team will be in touch with you shortly.</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                      <Button onClick={() => setAlert(false)} variant="outline-success">
                        Close
                      </Button>
                    </div>
                  </Alert>
                }
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
  
  export default Contact;