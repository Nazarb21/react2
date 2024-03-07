import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes, selectAllEpisodes, selectEpisodesStatus, selectEpisodesError } from '../app/episodesSlice';

function Episodes() {
    const dispatch = useDispatch();
    const episodes = useSelector(selectAllEpisodes);
    const status = useSelector(selectEpisodesStatus);
    const error = useSelector(selectEpisodesError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchEpisodes());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    } else if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Episodes</h1>
            {episodes.map(episode => (
                <div key={episode.id}>
                    <h2>{episode.name}</h2>
                    <p>{episode.air_date}</p>
                    <p>{episode.episode}</p>
                </div>
            ))}
        </div>
    );
}

export default Episodes;
