export const cocktailResultsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return {
        ...state,
        isLoading: true,
        payload: [],
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        payload: action.payload,
      };
    default:
      throw new Error();
  }
};
