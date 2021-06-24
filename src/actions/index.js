import { FETCH_STARTED, FETCH_SUCCESS, searchTermTypes } from './types';

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

export const setSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: searchTermTypes.ADD_SEARCH_TERM,
    payload: searchTerm,
  });
};

export const removeSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: searchTermTypes.REMOVE_SEARCH_TERM,
    payload: searchTerm,
  });
};
