//bulk of this section taken from https://www.c-sharpcorner.com/article/managing-lists-with-redux-in-react-js/
import { combineReducers } from 'redux';
import itemListReducer from './reducers';

const rootReducer = combineReducers({
  itemList: itemListReducer,
});

export default rootReducer;