import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const defaultState = {};

const store = createStore(reducers, defaultState, applyMiddleware(thunk));

export default store;
