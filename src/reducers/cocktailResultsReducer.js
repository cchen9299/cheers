import { FETCH_STARTED, FETCH_SUCCESS } from '../actions/types';

const init = {
  isLoading: false,
  cocktailList: [],
};

export default function cocktailResultsReducer(state = init, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        isLoading: action.isLoading,
        cocktailList: action.payload,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cocktailList: action.payload,
      };
    default:
      return state;
  }
}
