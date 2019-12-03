import { combineReducers } from 'redux';
import user from './user';
import movies from './movies';
import search from './search';
import list from './list';

export default combineReducers({ user, movies, search, list });
