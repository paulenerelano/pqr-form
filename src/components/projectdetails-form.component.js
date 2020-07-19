import React, { Component } from 'react';

import '../css/App.css';
import '../css/form-step.css';

import '../css/App.css';

export default class ProjectDetailsForm extends Component {

    constructor(props) {
        super(props);

        this.STEP_NUM = 3

        this.projectDetails = this.props.projectDetails;
    }

    handleTextFieldChange(event) {
        const { name, value } = event.target
        this.projectDetails[name] = value;

        this.props.handleChange("projectDetails", this.projectDetails)
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
                    <b><label htmlFor="objectives">Objectives:</label></b>
                    <textarea
                        rows="3"
                        className="form-control double-row"
                        name="objectives"
                        type="text"
                        value={this.projectDetails.objectives}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div>
                <div className="row">
                    <div className="col-sm form-group">
                        <b><label htmlFor="numParticipatingMembers">No. of Participating Members:</label></b>
                        <input
                            className="form-control"
                            name="numParticipatingMembers"
                            type="number"
                            value={this.projectDetails.numParticipatingMembers}
                            onChange={(event) => {
                                this.handleTextFieldChange(event)
                            }}
                        />
                    </div>

                    <div className="col-sm form-group">
                        <b><label htmlFor="numParticipatingRotarian">No. of Participating Rotarian:</label></b>
                        <input
                            className="form-control"
                            name="numParticipatingRotarian"
                            type="number"
                            value={this.projectDetails.numParticipatingRotarian}
                            onChange={(event) => {
                                this.handleTextFieldChange(event)
                            }}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <b><label htmlFor="execution">Execution:</label></b>
                    <textarea
                        rows="5"
                        className="form-control double-row"
                        name="execution"
                        type="number"
                        value={this.projectDetails.execution}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div>



            </div>
        )
    }
}