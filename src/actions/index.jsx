export const INPUT_VALUE = 'INPUT_VALUE';


export const inputValue = (value) => {
  return {
    type: INPUT_VALUE,
    payload: value
  }
}