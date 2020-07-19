import React, { Component } from 'react';

import '../css/form-step.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small teal pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">GUIDELINES ON REPORTING TO THE DISTRICT</h5>
              <p>
                It is very important for Rotaract clubs to establish ties and participate in the district. Being active in the district opens more doors for Rotaractors in terms of service ideas and opportunities for growth.
Aside from participation in district activities, Rotaract clubs are required to submit reports to the Rotaract District Committee. This way, the district officers become aware of what is happening in each club and will be able to act accordingly, whether to assist a club facing challenges at the moment or to recognize a project worthy of emulation within and even outside the district.</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">President’s Quarterly Report</h5>
              <p>
                A quarterly report submitted by the Rotaract Clubs in adherence of being an active club. Cubs must submit their reports into 3 parts as follow:</p>
              <p>• 1st Quarter & 4th Quarter (April of Previous RY – September of Present RY): October 15</p>
              <p>• 2nd Quarter (October – December): January 15
3rd Quarter (January – March): April 15</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright President Quarterly Report System
        </div>
      </footer >
    )
  }
}