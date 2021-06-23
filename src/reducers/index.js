import { FETCH_STARTED, FETCH_SUCCESS } from '../actions/types';

const init = {
  isLoading: false,
  items: [],
  item: {},
};

export const cocktailResultsReducer = (state = init, action) => {
  console.log('reducer called');
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        isLoading: true,
        items: [],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    default:
      return state;
  }
};
