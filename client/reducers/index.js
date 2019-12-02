import { combineReducers } from 'redux';
import user from './user';
import movies from './movies';
import search from './search';

export default combineReducers({ user, movies, search });
