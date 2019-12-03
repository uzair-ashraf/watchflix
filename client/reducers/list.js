import { GOT_INITIAL_LIST } from '../actions/getInitialListAction';

export default function (state = [], action) {
  switch (action.type) {
    case GOT_INITIAL_LIST:
      return action.payload;
    default:
      return state;
  }
}
