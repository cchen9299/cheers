import { combineReducers } from 'redux';
import cocktailResultsReducer from './cocktailResultsReducer';

export default combineReducers({
  cocktailAPI: cocktailResultsReducer,
});
