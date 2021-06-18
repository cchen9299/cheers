import React, { useState } from 'react';
import cocktail_data from './cocktail.data';
import CocktailCardList from './components/CocktailCardList';

function App() {
  const [cocktail, setCocktail] = useState(cocktail_data);
  const MAX_NUMBER_OF_INGREDIENTS = 2;

  const runThroughIngredients = (data, event) => {
    for (let j = 1; j <= MAX_NUMBER_OF_INGREDIENTS; j++) {
      if (data['strIngredient' + j].toLowerCase().includes(event.target.value.toLowerCase()) === false) {
      } else return true;
    }
  };

  const handleSearchInputChange = (event) => {
    if (event.target.value !== '') {
      setCocktail(
        cocktail.filter((cocktail) => {
          return (
            cocktail['strDrink'].toLowerCase().includes(event.target.value.toLowerCase()) ||
            runThroughIngredients(cocktail, event)
          );
        })
      );
    } else setCocktail(cocktail_data);
  };

  return (
    <div>
      <label style={{ color: 'white' }}>Search: </label>
      <input onChange={handleSearchInputChange} />
      <CocktailCardList cocktail={cocktail} />
    </div>
  );
}

export default App;
