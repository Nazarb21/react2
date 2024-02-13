import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error('Error fetching comments: ', error);
            });
    }, []);

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(todo => (
                    <li key={comment.id}>{comment.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
