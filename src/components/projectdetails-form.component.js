import React, { Component } from 'react';

import '../css/form-step.css';

export default class ProjectDetailsForm extends Component {
    
    constructor(props) {
        super(props);

        this.STEP_NUM = 3

        this.projectSummary = this.props.projectSummary;
    }

    handleTextFieldChange(event) {
        const {name, value} = event.target
        this.projectSummary[name] = value;

        this.props.handleChange("projectSummary", this.projectSummary)
    }

    render() {
        if (this.props.currentStep !== this.STEP_NUM) {
            return null;
        }

        return (
            <div>
                <h2 className="step-name">{this.props.stepName}</h2>
                <br/>
                

                
            </div>
        )
    }
}