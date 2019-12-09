import { GOT_INITIAL_LIST } from './types';
import axios from 'axios';

export const getInitialList = id => {
  return async dispatch => {
    const list = await axios.get(`/api/list/?id=${id}`);
    const { data } = list;
    dispatch({
      type: GOT_INITIAL_LIST,
      payload: data
    });
  };
};
