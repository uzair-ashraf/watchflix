import { GOT_INITIAL_LIST } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case GOT_INITIAL_LIST:
      return action.payload;
    default:
      return state;
  }
}
