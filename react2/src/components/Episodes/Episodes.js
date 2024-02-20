import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Episodes() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode')
            .then(response => {
                setEpisodes(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching episodes:', error);
            });
    }, []);

    return (
        <div>
            <h1>Episodes</h1>
            {episodes.map(episode => (
                <div key={episode.id}>
                    <h2>{episode.name}</h2>
                    <Link to={`/episode/${episode.id}`}>See details</Link>
                </div>
            ))}
        </div>
    );
}

export default Episodes;
