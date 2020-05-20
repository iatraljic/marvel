import {
  INPUT_VALUE_SUCCESS,
  INPUT_VALUE_FAILURE
} from '../actions';

const initialState = {
  results: [],
  total: 0,
  offset: 0,
  error: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE_SUCCESS:
      return {
        ...state,
        results: action.payload.results,
        total: action.payload.total,
        offset: action.payload.offset,
        error: false,
      };
    case INPUT_VALUE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;