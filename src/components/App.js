import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {images: [ ]}
     onSearchSubmit = async (term) => {
        let response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID af704aef45d9d5bf11ac281a5a7437fa259d7361411d4f4f0fca68d9b94326b1'
            }
        })
        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images.
            </div>
        );
    }
};

export default App;