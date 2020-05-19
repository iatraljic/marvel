import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import bookmarkReducer from './bookmarkReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  searchReducer,
  bookmarkReducer,
  loaderReducer,
});

export default rootReducer;
