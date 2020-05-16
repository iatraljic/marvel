import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

import './index.css';
import App from './App';


function setStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );
  return store;
};


render(
  <Provider store={setStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);