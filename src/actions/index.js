export const fetchCocktails = () => (dispatch) => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks);
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: data.drinks,
      });
    });
  //.catch((error) => console.log(error));
};
