import React from 'react';
import history from './history';

import logo from './media/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';


import Home from './components/home/home';
import PQRForm from './components/project/projectmain';
import Login from './screens/login';
import Confirmation from './screens/confirmation';
import Footer from './components/common/footer';
import { Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router history={history}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://rotary3830.org/">
            <img src={logo} alt="District 3830 Rotaract" />
          </a>
          {/* <div>
            <h2 className="navbar-brand" style={{ color: '#D52469' }}>Rotaract</h2>
            <br />
            <h4 className="navbar-brand" style={{ color: '#D52469' }}>District 3830</h4>
          </div> */}
        </nav>
        <br />
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/project' exact component={PQRForm} />
          <Route path='/home' exact component={Home} />
          <Route path='/confirmation' exact component={Confirmation} />
        </Switch>
      </div>
      <Footer />
    </Router >
  );
}

export default App;