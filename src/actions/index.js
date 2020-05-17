export const INPUT_VALUE_SUCCESS = 'INPUT_VALUE_SUCCESS';
export const INPUT_VALUE_ASYNC = 'INPUT_VALUE_ASYNC';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

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

export const addBookmark = () => {
  return {
    type: ADD_BOOKMARK,
  };
}

export const removeBookmark = () => {
  return {
    type: REMOVE_BOOKMARK,
  };
}