import React, { Component, Fragment } from 'react';
import ReactDropzone from "react-dropzone";

import '../css/form-step.css';

export default class ActionPhotosForm extends Component {
    constructor(props) {
        super(props);

        this.STEP_NUM = 4

        this.actionPhotos = this.props.actionPhotos;
    }

    handleTextFieldChange(event) {
        const {name, value} = event.target
        this.actionPhotos[name] = value;

        this.props.handleChange("actionPhotos", this.actionPhotos)
    }

    onPreviewDrop = (photos) => {
        this.actionPhotos.photos = this.actionPhotos.photos.concat(photos)
    }

    render() {
        if (this.props.currentStep !== this.STEP_NUM) {
            return null;
        }

        const dropzoneStyle = {
            width  : "20%",
            height : "150px",
            border : "1px solid black",
            
        };
        const dropzoneStyleActive = {
            width  : "20%",
            height : "150px",
            border : "5px solid green"
        };

        return (
            <div>
                <h2 className="step-name">{this.props.stepName}</h2>
                <br/>
                <div className="dropzone-container">
                    <ReactDropzone
                        onDrop={this.onPreviewDrop}
                        styles={dropzoneStyle}
                        children={()=>{
                            return (
                                <Fragment>
                                    <p>Please include action photos to support the execution. Max. of 4 photos.</p>
                                    <p>For sister/friendship club agreement, please attached a photo of your agreement</p>
                                    </Fragment>
                                );
                        }}
                    >
                    </ReactDropzone>
                </div>
                
            </div>
        )
    }
}