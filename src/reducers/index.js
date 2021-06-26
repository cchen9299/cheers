import { combineReducers } from 'redux';
import cocktailResultsReducer from './cocktailResultsReducer';
import filterPillsReducer from './filterPillsReducer';

export default combineReducers({
  cocktailAPI: cocktailResultsReducer,
  pillData: filterPillsReducer,
});
