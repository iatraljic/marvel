import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import App from './App';
import rootReducer from './reducers';
import rootSaga from './sagas';

import './index.css';


function setStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}


render(
  <Provider store={setStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);