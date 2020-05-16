import {
  INPUT_VALUE_ASYNC,
  INPUT_VALUE_SUCCESS
} from '../actions';

const initialState = 'pocetno';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE_ASYNC:
      return action.payload;
    case INPUT_VALUE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;