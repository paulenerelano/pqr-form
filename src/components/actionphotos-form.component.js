import React, { Component } from 'react';
import ReactDropzone from "react-dropzone";

import '../css/App.css';
import '../css/form-step.css';

export default class ActionPhotosForm extends Component {
    constructor(props) {
        super(props);

        this.STEP_NUM = 4
        this.mediaDetails = this.props.mediaDetails;
    }

    handleTextFieldChange(event) {
        const { name, value } = event.target
        this.mediaDetails[name] = value;

        this.props.handleChange("mediaDetails", this.mediaDetails)
    }

    generateId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    onDrop = files => {
        if (files.length > 4 || (files.length + this.mediaDetails.actionPhotos.length) > 4) {
            alert('Maximum of 4 photos only!');
            return;
        }

        files.map((file) => {
            file['id'] = this.generateId();
            Object.assign(file, { preview: URL.createObjectURL(file) })
            this.mediaDetails.actionPhotos.push(file)

            return null;
        })

        this.props.handleChange("actionPhotos", this.mediaDetails)
    };

    removeImage = (id) => {
        const actionPhotos = [...this.mediaDetails.actionPhotos];

        const filtered = actionPhotos.filter((item) => {
            return item.id !== id;
        });

        this.mediaDetails.actionPhotos = [...filtered];
        this.props.handleChange("actionPhotos", this.mediaDetails)
    }


    render() {
        if (this.props.currentStep !== this.STEP_NUM) {
            return null;
        }

        return (
            <div className="form-group">
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
                    <b><label htmlFor="club-name">Media URL</label></b>
                    <input
                        className="form-control"
                        name="mediaUrl"
                        type="text"
                        value={this.mediaDetails.mediaUrl}
                        onChange={(event) => {
                            this.handleTextFieldChange(event)
                        }}
                    />
                </div>
                <br />
                <div className="action-photo-dropzone-container">
                    <ReactDropzone
                        onDrop={this.onDrop}
                        accept='image/*'
                    >
                        {({ getRootProps, getInputProps }) => (
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
                        {this.mediaDetails.actionPhotos.map((file) => {
                            return (<img
                                alt={file.name}
                                key={file.preview}
                                src={file.preview}
                                onClick={() => this.removeImage(file.id)}
                                className="action-photo-preview"
                            />)
                        })}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm form-group">
                        <b><label htmlFor="label1">Label 1</label></b>
                        <input
                            className="form-control"
                            name="label1"
                            type="text"
                            value={this.mediaDetails.label1}
                            onChange={(event) => {
                                this.handleTextFieldChange(event)
                            }}
                        />
                    </div>

                    <div className="col-sm form-group">
                        <b><label htmlFor="label1">Label 2</label></b>
                        <input
                            className="form-control"
                            name="label2"
                            type="text"
                            value={this.mediaDetails.label2}
                            onChange={(event) => {
                                this.handleTextFieldChange(event)
                            }}
                        />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm form-group">
                        <b><label htmlFor="label1">Label 3</label></b>
                        <input
                            className="form-control"
                            name="label3"
                            type="text"
                            value={this.mediaDetails.label3}
                            onChange={(event) => {
                                this.handleTextFieldChange(event)
                            }}
                        />
                    </div>

                    <div className="col-sm form-group">
                        <b><label htmlFor="label1">Label 4</label></b>
                        <input
                            className="form-control"
                            name="label4"
                            type="text"
                            value={this.mediaDetails.label4}
                            onChange={(event) => {
                                this.handleTextFieldChange(event)
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}