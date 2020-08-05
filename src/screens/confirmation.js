import React, { Component } from 'react';

import '../css/App.css';

class Confirmation extends Component {

    handleSubmit = () => {


    }

    getDateString = (date) => {
        if (date === null || date === undefined) {
            return "NA"
        }

        return "" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDay() + 1)
    }

    render() {
        let { rotaractInfo,
            projectSummary,
            projectDetails,
            mediaDetails,
            handleCancel
        } = this.props

        console.log(projectSummary)

        return (
            <div>
                <h2 className="step-name">Confirmation</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: '100%' }}>
                        100%
                    </div>
                </div>
                <br />
                <div className="card">
                    <div className="card-body">
                        {/* Rotaract Club Information */}
                        <h4>Rotaract Club Information</h4>
                        <div className="dropdown-divider"></div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Rotaract Club Name:&nbsp;</p>
                            <p>{rotaractInfo.rotaractClubName}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Sponsoring Rotary Club:&nbsp;</p>
                            <p>{rotaractInfo.sponsorClubName}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* Project Summary */}
                        <h4>Project Summary</h4>
                        <div className="dropdown-divider"></div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Name:&nbsp;</p>
                            <p>{projectSummary.projectName}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Venue:&nbsp;</p>
                            <p>{projectSummary.venueOfProject}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Level of Participation:&nbsp;</p>
                            <p>{projectSummary.levelOfParticipation}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Avenue of Service:&nbsp;</p>
                            {projectSummary.avenueOfService.map((value, index) => {
                                return (index < projectSummary.avenueOfService.length - 1) ?
                                    <p>{value + ", "}</p> :
                                    <p>{value}</p>
                            })}
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Category:&nbsp;</p>
                            {projectSummary.category.map((value, index) => {
                                return (index < projectSummary.category.length - 1) ?
                                    <p>{value + ", "}</p> :
                                    <p>{value}</p>
                            })}
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Type:&nbsp;</p>
                            <p>{projectSummary.projectType}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Project Duration:&nbsp;</p>
                            <p>{this.getDateString(projectSummary.projectDurationStart) + " to " + this.getDateString(projectSummary.projectDurationEnd)}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Continuing Project:&nbsp;</p>
                            <p>{projectSummary.isContinuingProjects ? "Yes" : "No"}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Partner Organization:&nbsp;</p>
                            <p>{projectSummary.partnerOrganization}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Benificiaries:&nbsp;</p>
                            <p>{projectSummary.beneficiaries}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Project Cost:&nbsp;</p>
                            <p>Php&nbsp;{projectSummary.projectCost}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Fund Source:&nbsp;</p>
                            <p>{projectSummary.fundSource}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* Project Details */}
                        <h4>Project Details</h4>
                        <div className="dropdown-divider"></div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Objectives:&nbsp;</p>
                            <p>{projectDetails.objectives}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Number of Participating Members:&nbsp;</p>
                            <p>{projectDetails.numParticipatingMembers}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Number of Participating Rotarians:&nbsp;</p>
                            <p>{projectDetails.numParticipatingRotarian}</p>
                        </div>
                        <div className="d-flex">
                            <p className="font-weight-bold">Execution:&nbsp;</p>
                            <p>{projectDetails.execution}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* Action Photos */}
                        <h4>Action Photos</h4>
                        <div className="dropdown-divider"></div>
                        <div className="d-flex">
                            {mediaDetails.actionPhotos.map((file, index) => {
                                let labelName = "label" + (index + 1);
                                return (
                                    <div className="card"
                                        style={{ width: "25%" }}>
                                        <div className="card-header">
                                            {mediaDetails[labelName]}
                                        </div>
                                        <img
                                            alt={file.name}
                                            key={file.preview}
                                            src={file.preview}
                                            className="card-img-top"
                                            style={{ width: "100%" }}></img>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="p-2">
                        <button
                            className="btn btn-nav "
                            type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                    <div className="ml-auto p-2">
                        <button
                            className="btn btn-nav "
                            type="button" /*onClick={this.submit()}*/>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirmation;