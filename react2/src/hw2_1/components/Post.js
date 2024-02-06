// Post.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = ({ postId }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }, [postId]);

    return (
        <div>
            <h2>Post Details</h2>
            {post ? (
                <div>
                    <h3>Title: {post.title}</h3>
                    <p>ID: {post.id}</p>
                    <p>Body: {post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Post;
