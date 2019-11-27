import { USER_LOGGED_IN } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
}
