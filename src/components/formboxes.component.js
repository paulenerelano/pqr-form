import React, { Component } from 'react';

import '../css/App.css';
import '../css/form-step.css';

export default class FormBoxes extends Component {

    render() {
        return (
            this.props.options.map((option, index) => {
                return (
                    <div key={index} className="formboxes">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input
                                    type={this.props.type}
                                    id={this.props.name + "-" + index}
                                    name={this.props.type === "radio" ? this.props.radioGroup : option}
                                    value={option}
                                    onChange={this.props.handleChange} />
                            </div>
                        </div>
                        <div className="btn btn-static-box"><label htmlFor={this.props.name + "-" + index}>{option}</label></div>
                    </div>
                )
            })
        )
    }
}