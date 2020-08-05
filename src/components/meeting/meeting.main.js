import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import MeetingInfo from './meeting.info';
import Confirmation from '../../screens/confirmation'

class PQRForm extends Component {

    constructor(props) {
        super(props);

        // set initial values
        this.state = {
            step: 1,
            submitted: false, // TEMPORARY

            /**
             * date
             * venue
             * agenda
             * attendees
             * number of club attendees
             * total number of members
             * Auto compute: %= (Total Attendance / Membership Base) x 100
             */

            // Project Summary Form
            meetingInfo: {
                meetingDate: '',
                venue: '',
                agenda: '',
                attendees: '',
                numClubAttendees: 0,
                numMember: 0,
            },

        }

        this.STEPS = ['', 'Meeting Information'];

    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        // TODO: handle submit
    }

    _next = () => {
        let currentStep = this.state.step
        let maxStep = this.STEPS.length - 1
        currentStep = currentStep < maxStep ? currentStep + 1 : maxStep
        this.setState({
            step: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.step
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            step: currentStep
        })
    }

    _submit = () => {
        this.setState({ submitted: true })
    }

    _cancelConfirm = () => {
        this.setState({ submitted: false })
    }

    previousButton() {
        let currentStep = this.state.step;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-nav "
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.step;
        if (currentStep < this.STEPS.length - 1) {
            return (
                <button
                    className="btn btn-nav "
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return (
            <button
                className="btn btn-nav float-right"
                type="button" onClick={this._submit}>
                Submit
            </button>
        )
    }

    render() {
        let progressWidth = (this.state.step - 1) * (100 / (this.STEPS.length - 1));
        let { submitted } = this.state


        return (
            <div>
                {!submitted ?
                    <form onSubmit={this.handleSubmit}>
                        <MeetingInfo
                            stepName={this.STEPS[this.state.step]}
                            progressWidth={progressWidth}
                            currentStep={this.state.step}
                            handleChange={this.handleChange}
                            meetingInfo={this.state.meetingInfo}
                        />
                        <div className="d-flex">
                            <div className="p-2">{this.previousButton()}</div>
                            <div className="ml-auto p-2">{this.nextButton()}</div>
                        </div>
                    </form>
                    : null
                }
                {submitted ?
                    <Confirmation
                        rotaractInfo={this.state.rotaractInfo}
                        projectSummary={this.state.projectSummary}
                        projectDetails={this.state.projectDetails}
                        mediaDetails={this.state.mediaDetails}
                        handleCancel={this._cancelConfirm}
                    />
                    : null
                }
            </div>
        )
    }
}

export default withRouter(PQRForm);