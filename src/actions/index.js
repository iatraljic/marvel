export const INPUT_VALUE_SUCCESS = 'INPUT_VALUE_SUCCESS';
export const INPUT_VALUE_ASYNC = 'INPUT_VALUE_ASYNC';

export const inputValueSuccess = (value) => {
  return {
    type: INPUT_VALUE_SUCCESS,
    payload: value,
  };
};
export const inputValueAsync = (value) => {
  return {
    type: INPUT_VALUE_ASYNC,
    payload: value,
  };
};