import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="title">
                        <h1 className="h1">Giphy Search</h1>
                        <input type="text" className="search" 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;