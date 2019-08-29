import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }
    render() {
        let {description, urls} = this.props.image;
        return (
            <div>
                <img alt={description} src={urls.small} />
            </div>
        );
    }
}

export default ImageCard;