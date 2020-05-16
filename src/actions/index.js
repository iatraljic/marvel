export const INPUT_VALUE_ASYNC = 'INPUT_VALUE_ASYNC';


export const inputValueAsync = (value) => {
  return {
    type: INPUT_VALUE_ASYNC,
    payload: value
  }
}