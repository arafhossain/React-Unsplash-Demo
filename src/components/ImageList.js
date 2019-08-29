import React from 'react';
import './ImageList.css';

let ImageList = (props) => {
    let images = props.images.map((image) => {
        return <img key={image.id} alt={image.description} src={image.urls.small} />
    })
    return <div className="image-list">{images}</div>;
};

export default ImageList;