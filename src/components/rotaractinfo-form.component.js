import React, { Component } from 'react';

import '../css/form-step.css';
import FormBoxes from './formboxes.component';

export default class RotaractInfoForm extends Component {

    constructor(props) {
        super(props);

        this.STEP_NUM = 1;
        this.AVENUE_OF_SERVICE = ['Club', 'Community', 'Professional', 'International']
        this.rotaractInfo = this.props.rotaractInfo;
        this.PROJ_TYPE = [
            "Alabang Madrigal Business Park",
            "AMA Computer College-Makati Campus",
            "Arellano University College of Nursing",
            "A.R.O.M.A. (Active and Responsible in Outreach Mentoring and Ailment)",
            "Asia Pacific College",
            "Astig Kabataan",
            "Bagong Paraiso",
            "Barangay Torpe Youth Org",
            "Barrio Singkamas",
            "Brgy Sta Cruz",
            "Cembo ALS",
            "Cosmopolitan Las Pinas",
            "Daang Hari",
            "Enderun Colleges",
            "Fort Bonifacio Global City",
            "GK Sunshineville, Las Pinas",
            "Happy Barangay of Purok 1B (HB1B)",
            "Immaculate Heart of Mary College (IHMC)",
            "Informatics College & Community",
            "Kabataang West Rembo",
            "Katuparan Taguig",
            "Las Piñas",
            "Las Piñas East",
            "Las Piñas South",
            "Las Pinas West - HAPPY",
            "Makati",
            "Makati Ayala Triangle",
            "Makati Business District",
            "Makati Central",
            "Makati Century City",
            "Makati Cristo Rey at TUP",
            "Makati EdsaLibjo",
            "Makati Gems",
            "Makati Guadalupe Nuevo",
            "Makati Legaspi",
            "Makati Northwest Palanan",
            "Makati Olympia",
            "Makati Pinagkaisahan",
            "Makati Pio del Pilar",
            "Makati San Miguel",
            "Makati Southeast",
            //"Makati United",
            "Makati United",
            "Makati Uptown",
            "Makati Valero",
            "Makati West",
            "Marcelo Green",
            "Maximo Estrella Senior High School",
            "Miraculous Medal-Sucat",
            "Muntinlupa North",
            "Muntinlupa Science High School",
            "Olympia Folkloric Dance Ensemble",
            "Pamantasan Lungsod ng Muntinlupa - MBD",
            "Pamantasan Ng Lungsod ng Muntinlupa",
            "Paranaque Merville",
            "Parañaque Metro South",
            "Paranaque Poblacion - PATTS",
            "Paranaque Southeast",
            "Paranaque St. Andrew",
            "Paranaque Sucat",
            "Paseo de Roxas",
            "Puerto Princesa",
            "Puerto Princesa Central",
            "PUP-T JMA",
            "Sampiro",
            "San Beda College Alabang",
            "Satima Asuncion GK",
            "Senior High School San Beda College of Alabang",
            "SISFU",
            "South Signal Village",
            "Southville 3 NHA Apitong",
            "Southville International School - International Baccalaureate Dept.",
            "STI College Alabang MBD",
            "Sto. Niño Parañaque",
            "Sunvalley Sunrise",
            "Teatro de Olympia",
            "The Heart At Play",
            "Tribung Aligaga de Olympia",
            "University of Makati",
            "West Bay College",
            "Youth in Action",
        ];
        this.SPONSOR = {
            "Alabang Madrigal Business Park": "Alabang Madrigal Business Park",
            "AMA Computer College-Makati Campus": "Makati South",
            "Arellano University College of Nursing": "Makati Dasmariñas",
            "A.R.O.M.A. (Active and Responsible in Outreach Mentoring and Ailment)": "Makati Metro",
            "Asia Pacific College": "Makati-Paseo De Roxas",
            "Astig Kabataan": "AlabangLampara",
            "Bagong Paraiso": "Alabang",
            "Barangay Torpe Youth Org": "AlabangLampara",
            "Barrio Singkamas": "Makati North",
            "Brgy Sta Cruz": "Makati North",
            "Cembo ALS": "Makati New World",
            "Cosmopolitan Las Pinas": "Cosmopolitan Las Pinas",
            "Daang Hari": "Alabang-Daang Hari",
            "Enderun Colleges": "Bonifacio Global City Central",
            "Fort Bonifacio Global City": "Fort Bonifacio Global City",
            "GK Sunshineville, Las Pinas": "Makati South",
            "Happy Barangay of Purok 1B (HB1B)": "Makati-San Antonio",
            "Immaculate Heart of Mary College (IHMC)": "Paranaque Southwest",
            "Informatics College & Community": "Makati-San Lorenzo",
            "Kabataang West Rembo": "Makati Olympia",
            "Katuparan Taguig": "Makati-McKinley",
            "Las Piñas": "Las Piñas",
            "Las Piñas East": "Las Piñas East",
            "Las Piñas South": "Las Piñas South",
            "Las Pinas West - HAPPY": "Las PiñasWest",
            "Makati": "Makati",
            "Makati Ayala Triangle": "Makati Ayala Triangle",
            "Makati Business District": "Makati Business District",
            "Makati Central": "Makati Central",
            "Makati Century City": "Makati Century City",
            "Makati Cristo Rey at TUP": "Makati Cristo Rey",
            "Makati EdsaLibjo": "Makati Edsa",
            "Makati Gems": "Makati GEMS",
            "Makati Guadalupe Nuevo": "Makati-Guadalupe Nuevo",
            "Makati Legaspi": "Makati Legazpi",
            "Makati Northwest Palanan": "Makati Northwest",
            "Makati Olympia": "Makati Olympia",
            "Makati Pinagkaisahan": "Makati Central",
            "Makati Pio del Pilar": "Makati Pio Del Pilar",
            "Makati San Miguel": "Makati San Miguel",
            "Makati Southeast": "Makati Southeast",
            "Makati United": "Fort Bonifacio Global City",
            //"Makati United": "Makati Greenbelt",
            "Makati Uptown": "Makati Uptown",
            "Makati Valero": "Makati Valero",
            "Makati West": "Makati West",
            "Marcelo Green": "Paranaque East",
            "Maximo Estrella Senior High School": "Makati North",
            "Miraculous Medal-Sucat": "Muntinlupa Central, Muntinlupa City",
            "Muntinlupa North": "Muntinlupa North",
            "Muntinlupa Science High School": "Muntinlupa Business District, Muntinlupa City",
            "Olympia Folkloric Dance Ensemble": "Makati Olympia",
            "Pamantasan Lungsod ng Muntinlupa - MBD": "Muntinlupa Business District, Muntinlupa City",
            "Pamantasan Ng Lungsod ng Muntinlupa": "Muntinlupa North",
            "Paranaque Merville": "ParanaqueMerville",
            "Parañaque Metro South": "Parañaque Metro South",
            "Paranaque Poblacion - PATTS": "ParanaquePoblacion",
            "Paranaque Southeast": "Makati Southeast",
            "Paranaque St. Andrew": "ParanaqueSt. Andrew",
            "Paranaque Sucat": "Paranaque Sucat",
            "Paseo de Roxas": "Makati-Paseo De Roxas",
            "Puerto Princesa": "Puerto Princesa",
            "Puerto Princesa Central": "Puerto Princesa Central",
            "PUP-T JMA": "Paranaque Southwest",
            "Sampiro": "Makati Poblacion",
            "San Beda College Alabang": "Las Piñas-Camino Real",
            "Satima Asuncion GK": "Makati South",
            "Senior High School San Beda College of Alabang": "Parañaque South",
            "SISFU": "Makati Salcedo",
            "South Signal Village": "Makati-San Antonio",
            "Southville 3 NHA Apitong": "ParanaqueCentral",
            "Southville International School - International Baccalaureate Dept.": "Parañaque South",
            "STI College Alabang MBD": "Muntinlupa Business District, Muntinlupa City",
            "Sto. Niño Parañaque": "Palanyag-Parañaque",
            "Sunvalley Sunrise": "Sunvalley Sunrise",
            "Teatro de Olympia": "Makati Olympia",
            "The Heart At Play": "Circuit Makati",
            "Tribung Aligaga de Olympia": "Makati Olympia",
            "University of Makati": "Forbes Park",
            "West Bay College": "Alabang Centrepoint",
            "Youth in Action": "Alabang Centrepoint",
        };
    }

    handleTextFieldChange(event) {
        const { name, value } = event.target
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
                    <div className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: this.props.progressWidth + '%' }}>
                        {this.props.progressWidth + '%'}
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <b><label htmlFor="projectType">Rotaract Club Name</label></b>
                    <select className="form-control" id="projectType" onChange={(event) => {
                        this.rotaractInfo.rotaractClubName = event.target.value
                        this.rotaractInfo.sponsorClubName = this.SPONSOR[event.target.value]

                        this.props.handleChange("rotaractInfo", this.rotaractInfo)
                    }} >
                        {this.PROJ_TYPE.map((option, index) => {
                            return (
                                <option key={index} value={option}>{option}</option>
                            )
                        })}
                    </select>
                </div>
                {/* <div className="form-group">
                    <b><label htmlFor="rotaractClubName">Rotaract Club Name:</label></b>
                    <input
                        className="form-control"
                        id="rotaractClubName"
                        name="rotaractClubName"
                        type="text"
                        value={this.rotaractInfo.rotaractClubName}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div> */}

                <div className="form-group">
                    <b><label htmlFor="sponsorClubName">Sponsoring Rotary Club:</label></b>
                    <input
                        className="form-control"
                        id="sponsorClubName"
                        name="sponsorClubName"
                        type="text"
                        value={this.rotaractInfo.sponsorClubName}
                        readOnly
                        onChange={(event) => {
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