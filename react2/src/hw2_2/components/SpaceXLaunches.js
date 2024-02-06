// SpaceXLaunches.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpaceXLaunches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches/')
            .then(response => {
                const filteredLaunches = response.data.filter(launch => {
                    // Фільтруємо запуски, залишаючи лише ті, які не відбулися в 2020 році
                    return new Date(launch.launch_date_utc).getFullYear() !== 2020;
                });
                setLaunches(filteredLaunches);
            })
            .catch(error => {
                console.error('Error fetching SpaceX launches:', error);
            });
    }, []);

    return (
        <div>
            <h1>SpaceX Launches (Excluding 2020)</h1>
            <ul>
                {launches.map(launch => (
                    <li key={launch.flight_number}>
                        <p>Flight Number: {launch.flight_number}</p>
                        <p>Mission Name: {launch.mission_name}</p>
                        <p>Launch Date: {launch.launch_date_utc}</p>
                        <p>Rocket Name: {launch.rocket.rocket_name}</p>
                        <p>Launch Site: {launch.launch_site.site_name_long}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpaceXLaunches;
