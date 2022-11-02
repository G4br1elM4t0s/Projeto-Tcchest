import axios from 'axios';

const api = axios.create({
  baseURL:"192.168.15.49:4444"
});

export default api;