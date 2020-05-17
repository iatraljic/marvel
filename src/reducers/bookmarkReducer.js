import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK
} from '../actions';

const initialState = [];

const bookmarkReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case ADD_BOOKMARK:
      newState = [...state, action.payload];
      break;
    case REMOVE_BOOKMARK:
      const found = state.findIndex(
        (element) => element.id === action.payload.id
      );
      if (found !== -1) {
        newState = [...state.slice(0, found), ...state.slice(found + 1)];
      } else {
        newState = [...state];
      }
      break;
    default:
      newState = [...state];
  }

  return newState;
};

export default bookmarkReducer;
