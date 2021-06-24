import { combineReducers } from 'redux';
import cocktailResultsReducer from './cocktailResultsReducer';
import searchTermReducer from './searchTermReducer';

export default combineReducers({
  cocktails: cocktailResultsReducer,
  searchTerms: searchTermReducer,
});
