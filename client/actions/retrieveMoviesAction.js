import { RETRIEVED_MOVIES } from './types';
import axios from 'axios';

export const retrieveMovies = () => {
  return async dispatch => {
    const movies = await axios.get('/api/movies');
    const { data } = movies;
    dispatch({
      type: RETRIEVED_MOVIES,
      payload: data
    });
  };
};
