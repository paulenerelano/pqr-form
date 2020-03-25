import React, { Component } from 'react';
import ReactDropzone from "react-dropzone";

import '../css/form-step.css';

export default class ActionPhotosForm extends Component {
    constructor(props) {
        super(props);

        this.STEP_NUM = 4

        this.actionPhotos = this.props.actionPhotos;
    }

    onDrop = files => {
        console.log(files)
        this.actionPhotos = this.actionPhotos.concat(files)

        this.props.handleChange("actionPhotos", this.actionPhotos)
    };

    
      render() {
        if (this.props.currentStep !== this.STEP_NUM) {
            return null;
        }

        return (
            <div className="form-group">
                <h2 className="step-name">{this.props.stepName}</h2>
                <br/>
                <div className="action-photo-dropzone-container"> 
                    <ReactDropzone 
                        onDrop={this.onDrop}
                    >
                        {({getRootProps, getInputProps}) => (
                            <div {...getRootProps()} 
                                className="action-photo-dropzone-inner"
                            >
                                <input {...getInputProps()} />
                                <p>Please drag action photos which supports the execution. Max. of 4 photos.
                                    For sister/friendship club agreement, please attach a photo of your agreement.</p>
                            </div>
                        )}
                    </ReactDropzone>
                    <div className="dropzone-preview">
                        {this.actionPhotos.map((file) => {
                            console.log(file)
                            return (<img
                                alt="Preview"
                                key={file.preview}
                                src={file.preview}
                                className="action-photo-preview"
                            />)
                        })}
                    </div>
                </div>
            </div>
        );
      }
}