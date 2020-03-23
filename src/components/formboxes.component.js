import React, { Component } from 'react';

import '../css/form-step.css';

export default class FormBoxes extends Component {

    render() {
        return (
            this.props.options.map((option) => {
                return (
                    <div className="formboxes">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input 
                                    type={this.props.type} 
                                    name={this.props.type === "radio" ? this.props.radioGroup : option}
                                    value={option}
                                    onChange={this.props.handleChange}/>
                            </div>
                        </div>
                        <div className="btn btn-static-box">{option}</div>
                    </div>
                )
            })
        )
    }
}