import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userService';

const UserDetails = ({ match }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(match.params.userId)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user details:', error));
    }, [match.params.userId]);

    return (
        <div>
            <h2>User Details</h2>
            {user && (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    {/* Add more user details here */}
                    <Link to={`/user/${user.id}/posts`}>Posts of current user</Link>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
