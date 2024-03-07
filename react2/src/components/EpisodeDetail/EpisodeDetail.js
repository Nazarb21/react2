import React from 'react';
import { useParams } from 'react-router-dom';

function EpisodeDetail() {
    const { id } = useParams();

    return (
        <div>
            <h1>Episode Detail</h1>
            <p>Episode ID: {id}</p>
            {/* Add more details about the episode using Redux state */}
        </div>
    );
}

export default EpisodeDetail;
