import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.212.119:1337/api/',
  timeout: 5000,
});

export default api;
