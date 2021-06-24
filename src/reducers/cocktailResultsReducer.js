import { FETCH_STARTED, FETCH_SUCCESS } from '../actions/types';

const init = {
  isLoading: false,
  items: [],
  item: {},
};

export default function (state = init, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        isLoading: action.isLoading,
        items: action.payload,
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
}
