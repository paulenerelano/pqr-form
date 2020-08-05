import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../../css/form-step.css';

export default class meetingInfoForm extends Component {

    constructor(props) {
        super(props);

        this.STEP_NUM = 1;
        this.meetingInfo = this.props.meetingInfo;
    }

    handleTextFieldChange(event) {
        const { name, value } = event.target
        this.meetingInfo[name] = value;

        this.props.handleChange("meetingInfo", this.meetingInfo)
    }

    render() {
        if (this.props.currentStep !== this.STEP_NUM) {
            return null;
        }

        return (
            <div>
                <h2 className="step-name">{this.props.stepName}</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: this.props.progressWidth + '%' }}>
                        {this.props.progressWidth + '%'}
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <b><label htmlFor="club-name">Venue</label></b>
                    <input
                        className="form-control"
                        name="venue"
                        type="text"
                        value={this.meetingInfo.venue}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div>

                <div className="form-group">
                    <b><label htmlFor="club-name">Agenda</label></b>
                    <input
                        className="form-control"
                        name="agenda"
                        type="text"
                        value={this.meetingInfo.agenda}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div>

                <div className="form-group">
                    <b><label htmlFor="club-name">Attendees</label></b>
                    <input
                        className="form-control"
                        name="attendees"
                        type="text"
                        value={this.meetingInfo.attendees}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div>

                <div className="row">
                    <div className="col-sm form-group">
                        <b><label htmlFor="projDuration">Meeting Date</label></b>
                        <div className="row">
                            <div className="col-sm">
                                <b><label htmlFor="meetingDate">Start: </label></b>
                                <DatePicker
                                    selected={this.meetingInfo.meetingDate}
                                    onChange={(date) => {
                                        this.meetingInfo.meetingDate = date;
                                        this.props.handleChange("meetingInfo", this.meetingInfo)
                                    }}
                                    name="meetingDate"
                                    dateFormat="yyyy-MM-dd"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm form-group">
                        <b><label htmlFor="numClubAttendees">Number of Attendees</label></b>
                        <input
                            className="form-control"
                            name="numClubAttendees"
                            type="text"
                            value={this.meetingInfo.numClubAttendees}
                            onChange={(event) => {
                                this.handleTextFieldChange(event)
                            }}
                        />
                    </div>

                    <div className="col-sm form-group">
                        <b><label htmlFor="numMember">Number of Member</label></b>
                        <input
                            className="form-control"
                            name="numMember"
                            type="number"
                            value={this.meetingInfo.numMember}
                            onChange={(event) => {
                                this.handleTextFieldChange(event)
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}