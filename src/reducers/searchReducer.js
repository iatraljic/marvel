const initialState = 'pocetno';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_VALUE':
      return action.payload;
    default:
      return state;
  };
};

export default searchReducer;