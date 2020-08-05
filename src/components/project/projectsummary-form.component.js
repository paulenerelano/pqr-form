import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../../css/form-step.css';
import FormBoxes from '../common/formboxes.component';

export default class ProjectSummaryForm extends Component {

    constructor(props) {
        super(props);

        this.STEP_NUM = 2;
        this.AVENUE_OF_SERVICE = [
            { name: 'Club', check: false, disable: false, color: 'service-one' },
            { name: 'Community', check: false, disable: false, color: 'service-two' },
            { name: 'Professional', check: false, disable: false, color: 'service-three' },
            { name: 'International', check: false, disable: false, color: 'service-four' },
        ]
        this.LEVEL_OF_PARTICIPATION = ['Organizer', 'Committee', 'Participant', 'Partner', 'Sponsor'];
        this.AVENUE_DETAILS = {
            'Club': [
                { name: "Club meeting/fellowship", check: false, disable: false, color: 'service-one' },
                { name: "Club Induction (District 3830)", check: false, disable: false, color: 'service-one' },
                { name: "Membership development and retention", check: false, disable: false, color: 'service-one' },
                { name: "Public Image", check: false, disable: false, color: 'service-one' },
                { name: "District Events", check: false, disable: false, color: 'service-one' },
                { name: "Friendship Club agreement", check: false, disable: false, color: 'service-one' },
            ],
            'Community': [
                { name: "Water & Sanitation", check: false, disable: false, color: 'service-two' },
                { name: "Disease Prevention & Treatment", check: false, disable: false, color: 'service-two' },
                { name: "Maternal & Child Health", check: false, disable: false, color: 'service-two' },
                { name: "Basic education & Literacy", check: false, disable: false, color: 'service-two' },
                { name: "Economic & Community Development", check: false, disable: false, color: 'service-two' },
                { name: "Peace and Conflict Resolution", check: false, disable: false, color: 'service-two' },
                { name: "Environment", check: false, disable: false, color: 'service-two' },
            ],
            'Professional': [
                { name: "Skills acquisition", check: false, disable: false, color: 'service-three' },
                { name: "Skills sharing ", check: false, disable: false, color: 'service-three' },
            ],
            'International': [
                { name: "Twin Club agreement", check: false, disable: false, color: 'service-four' },
                { name: "MDIO activities", check: false, disable: false, color: 'service-four' },
                { name: "Club Induction (other District)", check: false, disable: false, color: 'service-four' },
                { name: "Multi-District Activities", check: false, disable: false, color: 'service-four' },
                { name: "International Conferences", check: false, disable: false, color: 'service-four' },
                { name: "Rotary International Recognitions", check: false, disable: false, color: 'service-four' },
                { name: "Exchanges", check: false, disable: false, color: 'service-four' },
                { name: "Rotary Foundation", check: false, disable: false, color: 'service-four' },
            ],
        };
        this.PROJ_CATEGORY = [
            ...this.AVENUE_DETAILS['Club'],
            ...this.AVENUE_DETAILS['Community'],
            ...this.AVENUE_DETAILS['Professional'],
            ...this.AVENUE_DETAILS['International'],
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
        const { name, value } = event.target
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
                <div className="progress">
                    <div className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: this.props.progressWidth + '%' }}>
                        {this.props.progressWidth + '%'}
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <b><label htmlFor="club-name">Name</label></b>
                    <input
                        className="form-control"
                        name="projectName"
                        type="text"
                        value={this.projectSummary.projectName}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div>

                <div className="form-group">
                    <b><label htmlFor="club-name">Venue</label></b>
                    <input
                        className="form-control"
                        name="venueOfProject"
                        type="text"
                        value={this.projectSummary.venueOfProject}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div>


                <div className="form-group">
                    <b><label htmlFor="levelOfParticipation">Level Of Participation</label></b>
                    <select className="form-control" id="levelOfParticipation" onChange={(event) => {
                        this.projectSummary.levelOfParticipation = event.target.value

                        this.props.handleChange("projectSummary", this.projectSummary)
                    }} >
                        {this.LEVEL_OF_PARTICIPATION.map((option, index) => {
                            return (
                                <option key={index} value={option}>{option}</option>
                            )
                        })}
                    </select>
                </div>
                {/* 
                <div className="form-group">
                    <b><label htmlFor="levelOfParticipation">Level Of Participation:</label></b>
                    <input
                        className="form-control"
                        name="levelOfParticipation"
                        type="text"
                        value={this.projectSummary.levelOfParticipation}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div> */}

                <div className="form-group">
                    <b><label>Avenue of Service</label></b>
                    <div className="input-group mb-3">
                        <FormBoxes
                            type="checkbox"
                            name="avenue-of-service"
                            options={this.AVENUE_OF_SERVICE}
                            handleChange={(event) => {
                                let name = event.target.name
                                let index = this.projectSummary.avenueOfService.indexOf(name);

                                if (event.target.checked) {
                                    if (index === -1) {
                                        this.projectSummary.avenueOfService.push(name);
                                    }
                                } else {
                                    if (index > -1) {
                                        this.projectSummary.avenueOfService.splice(index, 1);
                                    }
                                }

                                this.AVENUE_OF_SERVICE.forEach((_item, index) => {
                                    if (_item.name === name) {
                                        this.AVENUE_OF_SERVICE[index].check = event.target.checked;
                                    }
                                })

                                this.props.handleChange("projectSummary", this.projectSummary)
                            }}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <b><label>Category</label></b>
                    <div className="input-group mb-3">
                        <FormBoxes
                            type="checkbox"
                            name="category"
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

                                Object.keys(this.AVENUE_DETAILS).forEach(item => {
                                    this.AVENUE_DETAILS[item].forEach((_item, index) => {
                                        if (_item.name === name) {
                                            this.AVENUE_DETAILS[item][index].check = event.target.checked;
                                        }
                                    })
                                })

                                this.props.handleChange("projectSummary", this.projectSummary)
                            }}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <b><label htmlFor="projectType">Type</label></b>
                    <select className="form-control" id="projectType" onChange={(event) => {
                        this.projectSummary.projectType = event.target.value

                        this.props.handleChange("projectSummary", this.projectSummary)
                    }} >
                        {this.PROJ_TYPE.map((option, index) => {
                            return (
                                <option key={index} value={option}>{option}</option>
                            )
                        })}
                    </select>
                </div>

                <div className="row">
                    <div className="col-sm form-group">
                        <b><label htmlFor="projDuration">Project Duration</label></b>
                        <div className="row">
                            <div className="col-sm">
                                <b><label htmlFor="projectDurationStart">Start: </label></b>
                                <DatePicker
                                    selected={this.projectSummary.projectDurationStart}
                                    onChange={(date) => {
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
                                    onChange={(date) => {
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
                            this.projectSummary.isContinuingProject = event.target.value === 'true' ? true : false

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
                        onChange={(event) => {
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
                            onChange={(event) => {
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
                            onChange={(event) => {
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
                            onChange={(event) => {
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