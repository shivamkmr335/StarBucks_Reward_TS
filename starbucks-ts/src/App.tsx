import React from 'react';
import Header from './Components/header';
import AboutUs from './Components/AboutUs';
import Footer from './Components/footer';
import Rewards from './Components/Rewards';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import Gift from './Components/Gift';
import { useState } from 'react';



function App() {
  

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/rewards">
            <Rewards/>
          </Route>
          <Route path="/gift">
            <Gift></Gift>
          </Route>
        </Switch>
        <AboutUs/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

