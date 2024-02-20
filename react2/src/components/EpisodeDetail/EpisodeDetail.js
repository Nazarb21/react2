import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function EpisodeDetail() {
    const { id } = useParams();
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(response => {
                setEpisode(response.data);
            })
            .catch(error => {
                console.error('Error fetching episode:', error);
            });
    }, [id]);

    return (
        <div>
            {episode ? (
                <div>
                    <h1>{episode.name}</h1>
                    <p>Air date: {episode.air_date}</p>
                    <p>Episode: {episode.episode}</p>
                    <h2>Characters</h2>
                    <ul>
                        {episode.characters.map(character => (
                            <li key={character}>
                                <Link to={`/character/${character.split('/').pop()}`}>
                                    {character}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default EpisodeDetail;
