import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import '../css/App.css';

class Login extends Component {
    ACCOUNT_INFO = {
        email : "admin@gmail.com",
        password: "admin"
    }

    state = {
        email : '',
        password: '',
        error: null,
    }

    handleSubmit = () => {
        let {email, password} = this.state

        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email) === false) {
            this.setError("Invalid email!")
            return;
        }

        if (email == null || email === '') {
            this.setError("Input email!")
            return;
        }

        if (password == null || password === '') {
            this.setError("Input password!")
            return;
        }

        // TODO: dummy account info for now
        if (email !== this.ACCOUNT_INFO.email ||
            password !== this.ACCOUNT_INFO.password) {
            this.setError("Email or password is incorrect!")
            return;
        }

        // REDIRECT TO PQR FORM
        this.props.history.push('/form')
        
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    setError = (errorMessage) => {
        this.setState({error: errorMessage})
    }


    render() {
        let {error} = this.state;

        return (
            <form>
                {error != null?
                    <div className='form-row col-md-12'>
                        <div className='col-md-3'></div>
                        <div className="alert alert-danger col-md-6" role="alert">
                            {error}
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                    : null
                }
                <div className="form-row col-md-12">
                    <div className='col-md-3'></div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" 
                            name="email"
                            className="form-control" 
                            id="inputEmail4" 
                            placeholder="Email" 
                            onChange={this.handleChange}/>
                    </div>
                    <div className='col-md-3'></div>
                    <div className='col-md-3'></div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="inputPassword" 
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}/>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                <div className='form-row col-md-12'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <button
                            className="btn btn-nav w-100"
                            type="button"
                            onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </form>
        );
    }
}

export default  withRouter (Login);