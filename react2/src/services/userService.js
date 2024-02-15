import axios from 'axios';

const getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
};

const getUser = (userId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

export { getUsers, getUser };
