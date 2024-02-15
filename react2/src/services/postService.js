import axios from 'axios';

const getPostsByUser = (userId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
};

const getPost = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

const getCommentsByPost = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
};

export { getPostsByUser, getPost, getCommentsByPost };
