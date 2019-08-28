import React from 'react';

let ImageList = (props) => {
    let images = props.images.map((image) => {
        return <img key={image.id} alt={image.description} src={image.urls.small} />
    })
    return <div>{images}</div>;
};

export default ImageList;