import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Resume from './pages/Resume';
import ResumePDF from './pages/ResumePDF';

function App() {
  return (
    <Router>
      <Route path="/" render={({ location }) => (
        <Switch>
          <Route exact path="/" render={()=><Home />}/>
          <Route exact path="/resume" render={()=><Resume />}/>
          <Route exact path="/resume/pdf" render={()=><ResumePDF />}/>
        </Switch>
      )}/>
    </Router>
  );
}

export default App;
