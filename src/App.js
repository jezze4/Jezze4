import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Route path="/" render={({ location }) => (
        <Switch>
          <Route exact path="/" render={()=><Home />}/>
          <Route exact path="/resume" render={()=><Resume />}/>
          <Route exact path="/portfolio" render={()=><Portfolio />}/>
        </Switch>
      )}/>
    </Router>
  );
}

export default App;
