import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Home from './components/HomeComp';
import Contact from './components/ContactComp';
import OrderComp from './components/OrderComp';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/order" component={OrderComp} />
    </Switch>
  );
}

export default App;
