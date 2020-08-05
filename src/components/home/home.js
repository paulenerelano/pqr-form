import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import history from '../../history';

import './home.css';

class Home extends Component {

  handleClick = (event) => {
    const name = event.target.name;
    if (name === 'project') {
      history.push('/project');
    } else if (name === 'meeting') {

    } else {

    }
  }

  render() {
    return (
      <div className='home-container'>
        <div className='choose-button'>
          <button
            className="btn btn-nav "
            type="button" name='project' onClick={this.handleClick}>
            Club Project
          </button>
        </div>
        <div className='choose-button'>
          <button
            className="btn btn-nav "
            type="button" name='meeting' onClick={this.handleClick}>
            Meeting
          </button>
        </div>
        <div className='choose-button'>
          <button
            className="btn btn-nav "
            type="button" name='fellowship' onClick={this.handleClick}>
            Fellowship
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);