import axios from 'axios';

const api =  axios.create({
  baseURL: 'https://api.cooperjet.com.br',
});

export default api;
