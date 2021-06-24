import { searchTermTypes } from '../actions/types';

const init = {
  ingredients: [],
  ingredient: {},
};

export default function (state = init, action) {
  switch (action.type) {
    case searchTermTypes.ADD_SEARCH_TERM:
      return {
        ingredients: (prev) => prev.concat(action.payload),
      };
    case searchTermTypes.REMOVE_SEARCH_TERM:
      return {
        ingredients: (prev) =>
          prev.filter((ingredient) => {
            return ingredient !== action.payload;
          }),
      };
    default:
      return state;
  }
}
