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
        files.map((file) => {
            Object.assign(file, {preview: URL.createObjectURL(file)})
            this.actionPhotos.push(file)

            return null;
        })
        console.log(this.actionPhotos)

        this.props.handleChange("actionPhotos", this.actionPhotos)
    };

    
      render() {
        if (this.props.currentStep !== this.STEP_NUM) {
            return null;
        }

        return (
            <div className="form-group">
                <h2 className="step-name">{this.props.stepName}</h2>
                <div className="progress">
                    <div class="progress-bar progress-bar-striped" 
                        role="progressbar" 
                        style={{width: this.props.progressWidth + '%' }}>
                    {this.props.progressWidth + '%'}
                    </div>
                </div>
                <br/>
                <div className="action-photo-dropzone-container"> 
                    <ReactDropzone 
                        onDrop={this.onDrop}
                        accept='image/*'
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
                    <div className="action-photo-preview-container">
                        {this.actionPhotos.map((file) => {
                            return (<img
                                alt={file.name}
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