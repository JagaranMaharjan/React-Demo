import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './containers/about'
import Contact from './containers/contact'
import Header from './components/header'
import Footer from './components/footer'
import Profile from './containers/profile'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Header/>
            <Footer/>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
