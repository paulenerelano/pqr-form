import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
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
                    <b><label htmlFor="projectType">Type:</label></b>
                    <select className="form-control" id="projectType" onChange={(event) => {
                        this.projectSummary.projectType = event.target.value

                        this.props.handleChange("projectSummary", this.projectSummary)
                    }} >
                        {this.PROJ_TYPE.map((option)=>{
                            return (
                            <option value={option}>{option}</option>
                            )
                        })}
                    </select>
                </div>

                <div className="row">
                    <div className="col-sm form-group">
                        <b><label htmlFor="projDuration">Project Duration:</label></b>
                        <div className="row">
                            <div className="col-sm">
                                <b><label htmlFor="projectDurationStart">Start: </label></b>
                                <DatePicker
                                    selected={this.projectSummary.projectDurationStart}
                                    onChange={ (date) => {
                                        this.projectSummary.projectDurationStart = date;
                                        this.props.handleChange("projectSummary", this.projectSummary)
                                    }}
                                    name="projectDurationStart"
                                    dateFormat="yyyy-MM-dd"    
                                    className="form-control"       
                                />
                            </div>
                            <div className="col-sm">
                                <b><label htmlFor="projectDurationEnd">End: </label></b>
                                <DatePicker
                                    selected={this.projectSummary.projectDurationEnd}
                                    onChange={ (date) => {
                                        this.projectSummary.projectDurationEnd = date;
                                        this.props.handleChange("projectSummary", this.projectSummary)
                                    }}
                                    name="projectDurationEnd"
                                    dateFormat="yyyy-MM-dd"   
                                    className="form-control"       
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm form-group flex">
                        <b><label htmlFor="contProject">Continuing Project:</label></b>
                        <select className="form-control" id="projectType" onChange={(event) => {
                            this.projectSummary.isContinuingProject = event.target.value === 'true'? true : false

                            this.props.handleChange("projectSummary", this.projectSummary)
                        }} >
                            
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <b><label htmlFor="partnerOrganization">Partner Organization:</label></b>
                    <input
                    className="form-control"
                    name="partnerOrganization"
                    type="text"
                    value={this.projectSummary.partnerOrganization}
                    onChange={(event)=>{
                        this.handleTextFieldChange(event)
                    }}
                    />
                </div>

                <div className="row">
                    <div className="col-sm form-group">
                        <b><label htmlFor="beneficiaries">Beneficiaries:</label></b>
                        <input
                        className="form-control"
                        name="beneficiaries"
                        type="text"
                        value={this.projectSummary.beneficiaries}
                        onChange={(event)=>{
                            this.handleTextFieldChange(event)
                        }}
                        />
                    </div>

                    <div className="col-sm form-group">
                        <b><label htmlFor="numBeneficiaries">Number of Beneficiaries:</label></b>
                        <input
                        className="form-control"
                        name="numBeneficiaries"
                        type="number"
                        value={this.projectSummary.numBeneficiaries}
                        onChange={(event)=>{
                            this.handleTextFieldChange(event)
                        }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm form-group">
                        <b><label htmlFor="projectCost">Project Cost:</label></b>
                        <input
                        className="form-control"
                        name="projectCost"
                        type="number"
                        value={this.projectSummary.projectCost}
                        onChange={(event)=>{
                            this.handleTextFieldChange(event)
                        }}
                        />
                    </div>

                    <div className="col-sm form-group">
                        <b><label htmlFor="fundSource">Fund Source:</label></b>
                        <input
                        className="form-control"
                        name="fundSource"
                        type="text"
                        value={this.projectSummary.fundSource}
                        onChange={(event)=>{
                            this.handleTextFieldChange(event)
                        }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}