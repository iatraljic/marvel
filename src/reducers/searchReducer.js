import {
  INPUT_VALUE_ASYNC,
  INPUT_VALUE_SUCCESS,
  INPUT_VALUE_FAILURE
} from '../actions';

const initialState = 'pocetno';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE_ASYNC:
      return action.payload;
    case INPUT_VALUE_SUCCESS:
      return action.payload;
    case INPUT_VALUE_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;