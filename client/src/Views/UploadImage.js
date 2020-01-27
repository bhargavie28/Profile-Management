import React from 'react';
import ImageUploader from 'react-images-upload';
import { Avatar } from '@material-ui/core';


class UploadImage extends React.Component {

    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
              
            />
        );
    }
}

export default UploadImage;