import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK
} from '../actions';

const initialState = false;

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return true;
    case REMOVE_BOOKMARK:
      return false;
    default:
      return state;
  }
};

export default searchReducer;