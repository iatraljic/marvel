export const INPUT_VALUE_SUCCESS = 'INPUT_VALUE_SUCCESS';
export const INPUT_VALUE_ASYNC = 'INPUT_VALUE_ASYNC';
export const INPUT_VALUE_FAILURE = 'INPUT_VALUE_FAILURE';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

export const inputValueSuccess = (value) => {
  return {
    type: INPUT_VALUE_SUCCESS,
    payload: value,
  };
};

export const inputValueFailure = (error) => {
  return {
    type: INPUT_VALUE_FAILURE,
    payload: error.error.message,
  };
};

export const inputValueAsync = (value, offset) => {
  return {
    type: INPUT_VALUE_ASYNC,
    payload: {
      value: value,
      offset: offset
    },
  };
};

export const addBookmark = (character) => {
  return {
    type: ADD_BOOKMARK,
    payload: character
  };
}

export const removeBookmark = (character) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: character
  };
}