import React from 'react';
import NavBar from './NavbarComp';
import Footer from './FooterComp';
import { Jumbotron, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import jumbotronBgImage from '../assets/farm.jpg';  //How to make this in CSS??
import img1 from '../assets/Home-delivery.jpg';


function Home() {
    const history = useHistory();
    const handleClick = (path) => { history.push(path); }
    return(
        <div>
            <NavBar />
            <Jumbotron className="main-jumbotron" fluid
            style={{backgroundImage: `url(${jumbotronBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div>
                    <h1>GroFresh</h1>
                    <p>Super-fast deliveries, guaranteed</p>
                    <div>
                        <Button className="login-btn" variant="primary" onClick={() => handleClick("order")}>Search groceries nearby</Button>
                    </div>
                </div>
            </Jumbotron>
            <div className="g-0" style={{margin: "20px", padding: "15px"}}>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h2>Offer title</h2>
                        <p>Lorem ipsum dolor sit amet. Vit am puli vidi vici la revolta des moines.</p>
                        <Button className="login-btn" variant="outline-primary" onClick={() => handleClick("order")}>Search groceries nearby</Button>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={img1} height="100%" width="100%" alt="Delivery" />
                    </div>
                </div>
                <hr className="d-none d-md-block"/>
                <div className="row" style={{paddingTop: "15px"}}>
                    <div className="col-12 col-md-8" style={{textAlign: "right", alignItems: "center"}}>
                        <h2>Offer title</h2>
                        <p>Lorem ipsum dolor sit amet. Vit am puli vidi vici la revolta des moines.</p>
                        <Button className="login-btn" variant="outline-danger" onClick={() => handleClick("order")}>Search groceries nearby</Button>
                    </div>
                    <div className="col-12 col-md-4 order-sm-last order-md-first">
                        <img src={img1} height="100%" width="100%" alt="Delivery" />
                    </div>
                </div>
                <hr className="d-none d-md-block"/>
                <div className="row" style={{paddingTop: "15px"}}>
                    <div className="col-12 col-md-8">
                        <h2>Offer title</h2>
                        <p>Lorem ipsum dolor sit amet. Vit am puli vidi vici la revolta des moines.</p>
                        <Button className="login-btn" variant="outline-success" onClick={() => handleClick("order")}>Search groceries nearby</Button>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={img1} height="100%" width="100%" alt="Delivery" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;