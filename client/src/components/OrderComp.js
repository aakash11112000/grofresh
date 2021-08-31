import React, {useEffect, useState} from 'react';
import ITyped from 'react-ityped'

import NavBar from './NavbarComp';
import Footer from './FooterComp';
import { Jumbotron, Card, CardDeck, Button} from 'react-bootstrap';

import img1 from '../assets/salad.jpg'
import img2 from '../assets/chappati.jpg';
import img3 from '../assets/red_rice_idli.jpg';

const serverPort = 5000;


const Order = () => {
    const ITypestrings = ['250,000 happy customers', '2000 grocery partners', '50 different locations'];
    const getItemsFromServer = async() => {
        const serverUrl = `http://localhost:${serverPort}/api/stores/`;
        const res = await fetch(serverUrl);
        const data = await res.json();
        console.log('Inside getItemsFromServer function',data)        //Just for safety reasons
        return data;
    }

    const [state, changeState] = useState({
        items: [],
        isLoading: true
    });

    // Adding dependency list ensures that this hook doesn't re-render when state.items does not change
    useEffect(() => {
        const getItemsToRender = async() => {
            const renderItems = await getItemsFromServer();
            changeState({items: renderItems, isLoading: false})
        }
        getItemsToRender();
        console.log('Inside the useEffect hook', state)  //Seeing whether this re-renders infinitely - it does :/
        // I finally freakin understood this infinite loop hellish nightmare
    }, [state.isLoading])
    
    const newItems = state.items.map((item) => {
        return(
                // <Card className="col-12 col-md-6 mt-2">
                //     <Card.Body>
                //         <Card.Title>{item.name}</Card.Title>
                //         <Card.Subtitle className="mb-2 muted">{item.location}</Card.Subtitle>
                //         <Card.Text>This store has a rating of {item.ratings} on GroFresh</Card.Text>
                //     </Card.Body>
                // </Card>
                <div className="col-12 col-md-4" style={{display: 'flex', padding: '15px 0px', justifyContent: 'center'}}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 muted">{item.location}</Card.Subtitle>
                            <Card.Text>This store has a rating of {item.ratings} on GroFresh</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
        )
    })
    
    return(
        <div>
            <NavBar />

            <Jumbotron className="order-jumbotron">
            <h2 className="display-1" style={{fontWeight: "350"}}>The future is now</h2>
            <ITyped className="ityped display-3" showCursor={false} strings={ITypestrings} typeSpeed={130} backSpeed={50} startDelay={100} backDelay={250} loop={true} />
            </Jumbotron>

            <div className="featured-cards">
                <CardDeck className="row">
                    <Card className="col-12 col-md" style={{margin: "10px 15px"}}>
                        <Card.Img variant="top" width="100%" height="100%" src={img1} alt="Offer 1" />
                        <Card.Body>
                            <Card.Title as="h4">Offer 1</Card.Title>
                            <Card.Text>This is one of the greatest offers in the history of the world, buy it now. Don't miss it dude!</Card.Text>
                            <Button variant="success">Order now</Button>
                        </Card.Body>
                        <Card.Footer><small className="text-muted">Last updated 2 days ago.</small></Card.Footer> 
                    </Card>
                    <Card className="col-12 col-md" style={{margin: "10px 15px"}}>
                        <Card.Img variant="top" width="100%" height="100%" src={img2} alt="Offer 2" />
                        <Card.Body>
                            <Card.Title as="h4">Offer 2</Card.Title>
                            <Card.Text>This is one of the greatest offers in the history of the world, buy it now. Don't miss it dude!</Card.Text>
                            <Button variant="warning">Order now</Button>
                        </Card.Body>
                        <Card.Footer><small className="text-muted">Last updated 2 days ago.</small></Card.Footer> 
                    </Card>
                    <Card className="col-12 col-md" style={{margin: "10px 15px"}}>
                        <Card.Img variant="top" width="100%" height="100%" src={img3} alt="Offer 3" />
                        <Card.Body>
                            <Card.Title as="h4">Offer 3</Card.Title>
                            <Card.Text>This is one of the greatest offers in the history of the world, buy it now. Don't miss it dude!</Card.Text>
                            <Button variant="danger">Order now</Button>
                        </Card.Body>
                        <Card.Footer><small className="text-muted">Last updated 2 days ago.</small></Card.Footer> 
                    </Card>
                </CardDeck>
            </div>
            <CardDeck className="row g-0">
                {newItems}
            </CardDeck>
            <br />
            <br />
            <Footer />
        </div>
    );
}

export default Order;