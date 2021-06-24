import { FETCH_STARTED, FETCH_SUCCESS } from './types';

export const fetchCocktails = () => (dispatch) => {
  dispatch({
    type: FETCH_STARTED,
    payload: [],
    isLoading: true,
  });
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: data.drinks,
        isLoading: false,
      });
    });
};
