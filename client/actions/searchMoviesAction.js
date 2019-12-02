import { SEARCHED_MOVIES } from './types';
import axios from 'axios';

export const searchMovies = query => {
  return async dispatch => {
    const encodedQuery = encodeURI(query);
    const search = await axios.get(`/api/search/?query=${encodedQuery}`);
    const { results } = search.data;
    dispatch({
      type: SEARCHED_MOVIES,
      payload: results
    });
  };
};
