import React from 'react';

let ImageList = (props) => {
    console.log(props.images);
    let images = props.images.map((image) => {
        return <img key={image.id} src={image.urls.small} />
    })
    return <div>{images}</div>;
};

export default ImageList;