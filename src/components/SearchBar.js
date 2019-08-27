import React from 'react';

class SearchBar extends React.Component {
    inputChange(event){
        console.log(event.target.value)
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input type="text" onChange={this.inputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;