import React, { Component } from 'react';

import logo from './media/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import PQRForm from './components/pqr-form.component.js';
import Login from './screens/login';

class App extends Component {

  render () {
    return (
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
        {/* <PQRForm/> */}
        <Login/>
      </div>
    );
  }
}

export default App;
