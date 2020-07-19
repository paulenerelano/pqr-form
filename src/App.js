import React from 'react';
import history from './history';

import logo from './media/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';


import PQRForm from './components/pqr-form.component.js';
import Login from './screens/login';

import { Router, Route, Switch } from 'react-router'

function App() {
  return (
    
    <Router history={history}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://rotary3830.org/">
            <img src={logo} width="30" height="30" alt="District 3830 Rotaract" />
          </a>
          <div>
            <h2 className="navbar-brand" style={{color: '#D52469'}}>Rotaract</h2>
            <br/>
            <h4 className="navbar-brand" style={{color: '#D52469'}}>District 3830</h4>
          </div>
        </nav>
        <br/>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/form' exact component={PQRForm} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
