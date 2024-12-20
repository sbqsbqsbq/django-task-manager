import axios from 'axios';

const apiRequest = axios.create({
    baseURL: 'http://localhost:8000/tasks',
});

export default apiRequest;