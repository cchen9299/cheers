export const cocktailsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_COCKTAILS_START':
      return { ...state, isLoading: true };
    case 'FETCH_COCKTAILS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: data.forEach((subdata) => {
          if (subdata.drinks !== null) {
            setCocktail((previousState) => previousState.concat(subdata.drinks));
          }
        }),
      };
    default:
      throw new Error();
  }
};
