import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.128.144.63:1337/api/',
  timeout: 5000,
});

export default api;
