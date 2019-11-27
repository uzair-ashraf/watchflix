import { USER_LOGGED_IN } from './types';
import { getCompleteUserData } from '../api/apis';
export const signInUser = id => {
  return async dispatch => {
    const user = await getCompleteUserData(id);
    dispatch({
      type: USER_LOGGED_IN,
      payload: user
    });
  };
};
