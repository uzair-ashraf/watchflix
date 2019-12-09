import { DELETED_FROM_LIST } from './types';
import axios from 'axios';

export const deletedFromList = (userId, movieId) => {
  return async dispatch => {
    const response = await axios.delete('/api/list', {
      data: {
        userId,
        movieId
      }
    });
    const { data } = response;
    dispatch({
      type: DELETED_FROM_LIST,
      payload: data
    });
  };
};
