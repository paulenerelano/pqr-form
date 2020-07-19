import React, { Component } from 'react';

import RotaractInfoForm from './rotaractinfo-form.component';
import ProjectSummaryForm from './projectsummary-form.component';
import ProjectDetailsForm from './projectdetails-form.component';
import ActionPhotosForm from './actionphotos-form.component';
import { withRouter } from 'react-router';

class PQRForm extends Component {

    constructor(props) {
        super(props);

        this.STEPS = ['', 'Rotaract Club Information', 'Project Summary', 'Project Details', 'Action Photos'];


        // set initial values
        this.state = {
            step: 1,

            // Rotaract Info Form
            rotaractInfo: {
                rotaractClubName: 'Alabang Madrigal Business Park',
                sponsorClubName: 'Alabang Madrigal Business Park',
            },

            // Project Summary Form
            projectSummary: {
                projectName: '',
                venueOfProject: '',
                levelOfParticipation: '',
                avenueOfService: [],
                category: [],
                projectType: '',
                projectDurationStart: '',
                projectDurationEnd: '',
                isContinuingProject: false,
                partnerOrganization: '',
                beneficiaries: '',
                numBeneficiaries: 0,
                projectCost: 0,
                fundSource: '',
            },

            // Project Details Form
            projectDetails: {
                objectives: '',
                numParticipatingMembers: 0,
                numParticipatingRotarian: 0,
                execution: '',
            },

            // Action Photos Form
            actionPhotos: []
        }
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
        // console.log(this.state)
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
        console.log(this.state);
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

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <RotaractInfoForm
                        stepName={this.STEPS[this.state.step]}
                        progressWidth={progressWidth}
                        currentStep={this.state.step}
                        handleChange={this.handleChange}
                        rotaractInfo={this.state.rotaractInfo}
                    />
                    <ProjectSummaryForm
                        stepName={this.STEPS[this.state.step]}
                        progressWidth={progressWidth}
                        currentStep={this.state.step}
                        handleChange={this.handleChange}
                        projectSummary={this.state.projectSummary}
                    />
                    <ProjectDetailsForm
                        stepName={this.STEPS[this.state.step]}
                        progressWidth={progressWidth}
                        currentStep={this.state.step}
                        handleChange={this.handleChange}
                        projectDetails={this.state.projectDetails}
                    />
                    <ActionPhotosForm
                        stepName={this.STEPS[this.state.step]}
                        progressWidth={progressWidth}
                        currentStep={this.state.step}
                        handleChange={this.handleChange}
                        actionPhotos={this.state.actionPhotos}
                    />



                    <div className="d-flex">
                        <div className="p-2">{this.previousButton()}</div>
                        <div className="ml-auto p-2">{this.nextButton()}</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(PQRForm)