import React from 'react';
import GifDisplay from './GifDisplay';
import './GifList.css';

const GifList = ({ gifs }) => {
    const renderedList = gifs.map((gif) => {
        return (
            <GifDisplay 
                key={gif.id} 
                gif={gif} 
            />
        );
    });

    return <div className="gif-list">{renderedList}</div>
}

export default GifList;