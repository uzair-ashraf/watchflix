import { ADDED_TO_LIST } from './types';
import axios from 'axios';

export function addedToList(id, movie) {
  return async dispatch => {
    const response = await axios.post(`/api/list?id=${id}`, movie);
    const { data } = response;
    dispatch({
      type: ADDED_TO_LIST,
      payload: data
    });
  };
}
