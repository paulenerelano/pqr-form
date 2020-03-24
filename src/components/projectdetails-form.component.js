import React, { Component } from 'react';

import '../css/form-step.css';

export default class ProjectDetailsForm extends Component {
    
    constructor(props) {
        super(props);

        this.STEP_NUM = 3

        this.projectDetails = this.props.projectDetails;
    }

    handleTextFieldChange(event) {
        const {name, value} = event.target
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
                <br/>

                <div className="form-group">
                    <b><label htmlFor="objectives">Objectives:</label></b>
                    <textarea
                    rows="3"
                    className="form-control double-row"
                    name="objectives"
                    type="text"
                    value={this.projectDetails.objectives}
                    onChange={(event)=>{
                        this.handleTextFieldChange(event)
                    }}
                    />
                </div>    

                <div className="form-group">
                    <b><label htmlFor="levelOfParticipation">Level Of Participation:</label></b>
                    <input
                    className="form-control"
                    name="levelOfParticipation"
                    type="text"
                    value={this.projectDetails.levelOfParticipation}
                    onChange={(event)=>{
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
                        onChange={(event)=>{
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
                        onChange={(event)=>{
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
                    onChange={(event)=>{
                        this.handleTextFieldChange(event)
                    }}
                    />
                </div>     
                

                
            </div>
        )
    }
}