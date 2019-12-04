import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import Landing from './Landing';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <Router>
      <Fragment>
        <Navigation />

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route component={Routes} />
        </Switch>

      </Fragment>
    </Router>
  );
}

export default App;