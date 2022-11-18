import axios from 'axios';

export const api = () =>
  (axios.defaults.baseURL = 'https://connections-api.herokuapp.com');
