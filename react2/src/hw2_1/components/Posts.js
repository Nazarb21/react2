// Posts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    const handlePostSelect = (postId) => {
        setSelectedPost(postId);
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id} onClick={() => handlePostSelect(post.id)}>
                        {post.title}
                    </li>
                ))}
            </ul>
            {selectedPost && <Post postId={selectedPost} />}
        </div>
    );
};

export default Posts;
