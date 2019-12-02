import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = composeEnhancers(applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={createStore(rootReducer, middleWare)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
