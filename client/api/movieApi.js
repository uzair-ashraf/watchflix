// const axios = require('axios');
import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

movieDb.interceptors.request.use(request => {
  request.params = {
    ...request.params,
    api_key: process.env.MOVIE_API_KEY
  };
  return request;
});

module.exports = {
  movieDb
};
