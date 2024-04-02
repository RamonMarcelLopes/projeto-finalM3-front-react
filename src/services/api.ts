import axios from 'axios';

const api = axios.create({
  baseURL: 'https://paletas-jc.onrender.com/paletas',
});

export default api;
