import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5001/api' });

export const getPopularTours = () => httpClient.get('/tours?limit=3');

export const getTours = (page = 1, limit = 10) =>
  httpClient.get(`/tours?page=${page}&limit=${limit}`);
