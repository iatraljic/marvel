import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import bookmarkReducer from './bookmarkReducer';

const rootReducer = combineReducers({
  searchReducer,
  bookmarkReducer,
});

export default rootReducer;
