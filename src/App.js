import React, { useEffect, useReducer, useState } from 'react';
import CocktailCardList from './components/CocktailCardList';
import { cocktailResultsReducer } from './redux/reducers';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const MAX_NUMBER_OF_INGREDIENTS = 10;
  const [cocktail, dispatchCocktail] = useReducer(cocktailResultsReducer, { isLoading: false, payload: [] });

  useEffect(() => {
    fetchDrinks();
  }, []);

  async function fetchDrinks() {
    dispatchCocktail({ type: 'FETCH_STARTED' });
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then((res) => res.json())
      .then((data) => {
        dispatchCocktail({
          type: 'FETCH_SUCCESS',
          payload: data.drinks,
        });
      })
      .catch((error) => console.log(error));
  }

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const runThroughIngredients = (data) => {
    for (let i = 1; i <= MAX_NUMBER_OF_INGREDIENTS; i++) {
      if (data['strIngredient' + i] !== null) {
        if (data['strIngredient' + i].toLowerCase().includes(searchTerm) === false) {
        } else return true;
      }
    }
  };

  const filteredCocktail = cocktail.payload.filter((data) => {
    return data['strDrink'].toLowerCase().includes(searchTerm) || runThroughIngredients(data);
  });

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {console.log(cocktail)}
      <label style={{ color: 'white' }}>Search: </label>
      <input onChange={handleSearchInputChange} />
      {cocktail.payload && <CocktailCardList cocktail={filteredCocktail} />}
    </div>
  );
}

export default App;
