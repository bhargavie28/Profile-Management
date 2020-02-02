import React, { Component } from 'react';

export default class FileUpload extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <div className="form-group">
                            <input type="file" multiple/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FileUpload;