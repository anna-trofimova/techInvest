import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './App.css';

import Navbar from './componets/Navbar'
import Onas from './pages/Onas'
import Projects from './pages/Projects'
import Uslugi from './pages/Uslugi'
import Contacts from './pages/Contacts'

function App() {
  return (
    <Router>
  <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Onas} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/uslugi" exact component={Uslugi} />
          <Route path="/contacts" exact component={Contacts} />

        </Switch>
      </div>

  </Router>

  );
}

export default App;
