import { SEARCHED_MOVIES } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SEARCHED_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
