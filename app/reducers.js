//bulk of this section taken from https://www.c-sharpcorner.com/article/managing-lists-with-redux-in-react-js/
import { ADD_ITEM } from './actions';

const initialState = {
  itemList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemList: [...state.itemList, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;