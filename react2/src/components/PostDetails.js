import React, { useState, useEffect } from 'react';
import { getPost, getCommentsByPost } from '../services/postService';

const PostDetails = ({ match }) => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPost(match.params.postId)
            .then(response => setPost(response.data))
            .catch(error => console.error('Error fetching post details:', error));

        getCommentsByPost(match.params.postId)
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [match.params.postId]);

    return (
        <div>
            <h2>Post Details</h2>
            {post && (
                <div>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    {/* Add more post details here */}
                </div>
            )}
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p>Name: {comment.name}</p>
                        <p>Email: {comment.email}</p>
                        <p>Body: {comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostDetails;
