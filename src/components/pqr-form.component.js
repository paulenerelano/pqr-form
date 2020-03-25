import React, { Component } from 'react';

import RotaractInfoForm from './rotaractinfo-form.component';
import ProjectSummaryForm from './projectsummary-form.component';
import ProjectDetailsForm from './projectdetails-form.component';
import ActionPhotosForm from './actionphotos-form.component';

export default class PQRForm extends Component {

    constructor(props) {
        super(props);

        this.STEPS = ['', 'Rotaract Club Information', 'Project Summary', 'Project Details', 'Action Photos'];

        // set initial values
        this.state = {
            step: 1,

            // Rotaract Info Form
            rotaractInfo: {
                rotaractClubName: '',
                sponsorClubName: '',
                avenueOfService: [],
            },

            // Project Summary Form
            projectSummary: {
                projectName: '',
                venueOfProject: '',
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
                levelOfParticipation: '',
                numParticipatingMembers: 0,
                numParticipatingRotarian: 0,
                execution: '',
            },

            // Action Photos Form
            actionPhotos: []
        }
    }

    handleChange = (name, value) => {
        console.log(this.state)
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
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            step: currentStep
        })
    }

    previousButton() {
    let currentStep = this.state.step;
    if(currentStep !== 1){
        return (
        <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
        Previous
        </button>
        )
    }
    return null;
    }
    
    nextButton(){
    let currentStep = this.state.step;
    if(currentStep < this.STEPS.length - 1){
        return (
        <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
        Next
        </button>        
        )
    }
    return null;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <RotaractInfoForm
                        stepName={this.STEPS[this.state.step]}
                        currentStep={this.state.step}
                        handleChange={this.handleChange}
                        rotaractInfo={this.state.rotaractInfo}
                    />
                    <ProjectSummaryForm
                        stepName={this.STEPS[this.state.step]}
                        currentStep={this.state.step}
                        handleChange={this.handleChange}
                        projectSummary={this.state.projectSummary}
                    />
                    <ProjectDetailsForm
                        stepName={this.STEPS[this.state.step]}
                        currentStep={this.state.step}
                        handleChange={this.handleChange}
                        projectDetails={this.state.projectDetails}
                    />
                    <ActionPhotosForm
                        stepName={this.STEPS[this.state.step]}
                        currentStep={this.state.step}
                        handleChange={this.handleChange}
                        actionPhotos={this.state.actionPhotos}
                    />

                    {this.previousButton()}
                    {this.nextButton()}
                </form>
            </div>
        )
    }
}