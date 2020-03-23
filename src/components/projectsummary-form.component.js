import React, { Component } from 'react';

import '../css/form-step.css';
import FormBoxes from './formboxes.component';

export default class ProjectSummaryForm extends Component {

    constructor(props) {
        super(props);

        this.STEP_NUM = 2;
        this.PROJ_CATEGORY = [
                'Polio Eradication',
                'Economic & Community Development',
                'The Rotary Foundation',
                'Water & Sanitation',
                'Peace and Conflict Resolution',
                'Sisterhood signing',
                'Disease Prevention & Treatment',
                'Membership Development & Retention',
                'Friendship club signing',
                'Maternal & Child Health',
                'Public Image',
                'Fundraising',
                'Literacy',
                'Environment',
            ];
        this.PROJ_TYPE = [
            'Sustainable (More than 1 R.Y.)',
            'Long Term (6 Months to 1 R.Y.)',
            'Short Term (6 Months and Below)',
            'One Time'
        ]

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
                <div className="form-group">
                    <b><label htmlFor="club-name">Name:</label></b>
                    <input
                    className="form-control"
                    name="projectName"
                    type="text"
                    value={this.projectSummary.projectName}
                    onChange={(event)=>{
                        this.handleTextFieldChange(event)
                    }}
                    />
                </div>

                <div className="form-group">
                    <b><label htmlFor="club-name">Venue:</label></b>
                    <input
                    className="form-control"
                    name="venueOfProject"
                    type="text"
                    value={this.projectSummary.venueOfProject}
                    onChange={(event)=>{
                        this.handleTextFieldChange(event)
                    }}
                    />
                </div>

                <div className="form-group">
                    <b><label htmlFor="club-name">Category:</label></b>
                    <div className="input-group mb-3">
                        <FormBoxes
                            type="checkbox"
                            options={this.PROJ_CATEGORY}
                            handleChange={(event) => {
                                let name = event.target.name
                                let index = this.projectSummary.category.indexOf(name);

                                if (event.target.checked) {
                                    if (index === -1) {
                                        this.projectSummary.category.push(name);
                                    }
                                } else {
                                    if (index > -1) {
                                        this.projectSummary.category.splice(index, 1);
                                    }
                                }

                                this.props.handleChange("projectSummary", this.projectSummary)
                            }}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <b><label htmlFor="club-name">Type:</label></b>
                    <div className="input-group mb-3">
                        <FormBoxes
                            type="radio"
                            radioGroup="type"
                            options={this.PROJ_TYPE}
                            handleChange={(event) => {
                                let value = event.target.value

                                if (event.target.checked) {
                                    this.projectSummary.projectType = value
                                } else {
                                    this.projectSummary.projectType = []
                                }

                                this.props.handleChange("projectSummary", this.projectSummary)
                            }}
                        />
                    </div>
                </div>

                
            </div>
        )
    }
}