//bulk of this section taken from https://www.c-sharpcorner.com/article/managing-lists-with-redux-in-react-js/
export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});