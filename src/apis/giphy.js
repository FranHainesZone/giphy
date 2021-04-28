import axios from 'axios';

const KEY = 'HRqYLT8rSs8kJbbogj02Z0mbrWnVVrGE';

export default axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/search?api_key=',
    params: {
        maxResults: 30,
        key: KEY
    }
});

