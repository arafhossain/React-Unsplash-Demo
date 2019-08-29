import React from 'React';

class ImageCard extends React.Component {
    render() {
        return (
            <div>
                <img alt={this.props.image.description} src={this.props.image.urls.small} />
            </div>
        )
    }
}