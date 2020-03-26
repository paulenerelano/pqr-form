import React, { Component } from 'react';

import '../css/form-step.css';
import FormBoxes from './formboxes.component';

export default class RotaractInfoForm extends Component {

    constructor(props) {
        super(props);

        this.STEP_NUM = 1;
        this.AVENUE_OF_SERVICE = ['Club', 'Community', 'Professional', 'International']
        this.rotaractInfo = this.props.rotaractInfo;
    }

    handleTextFieldChange(event) {
        const {name, value} = event.target
        this.rotaractInfo[name] = value;

        this.props.handleChange("rotaractInfo", this.rotaractInfo)
    }

    render() {
        if (this.props.currentStep !== this.STEP_NUM) {
            return null;
        }

        return (
            <div>
                <h2 className="step-name">{this.props.stepName}</h2>
                <div className="progress">
                    <div class="progress-bar progress-bar-striped" 
                        role="progressbar" 
                        style={{width: this.props.progressWidth + '%' }}>
                    {this.props.progressWidth + '%'}
                    </div>
                </div>
                <br/>
                <div className="form-group">
                    <b><label htmlFor="rotaractClubName">Rotaract Club Name:</label></b>
                    <input
                    className="form-control"
                    id="rotaractClubName"
                    name="rotaractClubName"
                    type="text"
                    value={this.rotaractInfo.rotaractClubName}
                    onChange={(event)=>{
                        this.handleTextFieldChange(event)
                    }}
                    />
                </div>

                <div className="form-group">
                    <b><label htmlFor="sponsorClubName">Sponsoring Rotary Club:</label></b>
                    <input
                    className="form-control"
                    id="sponsorClubName"
                    name="sponsorClubName"
                    type="text"
                    value={this.rotaractInfo.sponsorClubName}
                    onChange={(event)=>{
                        this.handleTextFieldChange(event)
                    }}
                    />
                </div>

                <div className="form-group">
                    <b><label>Avenue of Service:</label></b>
                    <div className="input-group mb-3">
                        <FormBoxes
                            type="checkbox"
                            name="avenue-of-service"
                            options={this.AVENUE_OF_SERVICE}
                            handleChange={(event) => {
                                let name = event.target.name
                                let index = this.rotaractInfo.avenueOfService.indexOf(name);

                                if (event.target.checked) {
                                    if (index === -1) {
                                        this.rotaractInfo.avenueOfService.push(name);
                                    }
                                } else {
                                    if (index > -1) {
                                        this.rotaractInfo.avenueOfService.splice(index, 1);
                                    }
                                }

                                this.props.handleChange("rotaractInfo", this.rotaractInfo)
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}