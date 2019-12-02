import { RETRIEVED_MOVIES } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case RETRIEVED_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
