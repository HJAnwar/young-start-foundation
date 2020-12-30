import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import AboutUs from './Component/AboutUs/AboutUs';
import Service from './Component/Service/Service';




function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/service">
            <Service/>
          </Route>
          <Route path="/mission">
            
          </Route>
          <Route path="/aboutus">
            <AboutUs/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
