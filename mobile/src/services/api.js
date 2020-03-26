import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.170.1.109:3333'
});

export default api;