//bulk of this section taken from https://www.c-sharpcorner.com/article/managing-lists-with-redux-in-react-js/
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;