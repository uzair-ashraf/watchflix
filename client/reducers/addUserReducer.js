import { ADD_USER } from '../actions/types';

const initialState = {
  user: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return initialState;
  }
}
