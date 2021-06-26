import { toSentenceCase } from '../util/helper';
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
      const newDrinkList = data.drinks.map((drink) => {
        const newDrinkObject = drink;
        // get ingredients keys
        const ingredientList = Object.keys(drink).filter((key) => {
          return key.includes('Ingredient');
        });
        //assign values to ingredients keys
        ingredientList.forEach((ingredient, index) => {
          ingredientList[index] = drink[ingredient] ? toSentenceCase(drink[ingredient]) : null;
          delete newDrinkObject[ingredient];
        });

        //get measurement keys
        const measurementList = Object.keys(drink).filter((key) => {
          return key.includes('Measure');
        });
        //assign values to measurement keys
        measurementList.forEach((measurement, index) => {
          measurementList[index] = drink[measurement];
          delete newDrinkObject[measurement];
        });

        return Object.assign(newDrinkObject, { ingredients: ingredientList, measurements: measurementList });
      });
      dispatch({
        type: FETCH_SUCCESS,
        payload: newDrinkList,
        isLoading: false,
      });
    });
};
