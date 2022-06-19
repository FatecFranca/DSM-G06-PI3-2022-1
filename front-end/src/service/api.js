import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});

if(localStorage.getItem('user.token')) {
  const token = localStorage.getItem('user.token');
  api.defaults.headers.common["x-access-token"] = token
}

export default api;