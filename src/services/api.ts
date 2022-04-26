import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fake-server-rocketshoes.herokuapp.com/',
});

export default api;
