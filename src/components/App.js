import React from 'react';
import SearchBar from './SearchBar';
import giphy from '../apis/giphy';
import GifList from './GifList';
import './App.css';

class App extends React.Component {
    state = { gifs: [] };

    componentDidMount() {
        this.onTermSubmit('gif');
    }

    onTermSubmit = async term => {
        const response = await giphy.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            gifs: response.data.data
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="sixteen wide column">
                            <GifList gifs={this.state.gifs} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 