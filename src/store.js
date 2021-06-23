import { applyMiddleware, createStore } from 'redux';
import { cocktailResultsReducer } from './reducers';
import thunk from 'redux-thunk';

const defaultState = {};

const store = createStore(cocktailResultsReducer, defaultState, applyMiddleware(thunk));

export default store;
