import { GOT_INITIAL_LIST, ADDED_TO_LIST } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case GOT_INITIAL_LIST:
      return action.payload;
    case ADDED_TO_LIST:
      return state.concat(action.payload);
    default:
      return state;
  }
}
