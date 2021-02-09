import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Buyflow, { ProductIds } from './buyflow/Buyflow';
import { CSS_CLASSES } from './styles/cssClasses.contants';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/">
          <p>Welcome to Getsafe's Developer Insurance</p>
          <Link className={ CSS_CLASSES.LINK } to="/buy/insurance_dev">Get started!</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
