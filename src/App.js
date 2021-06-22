import React, { useEffect, useState } from 'react';
import CocktailCardList from './components/CocktailCardList';

function App() {
  const [cocktail, setCocktail] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const MAX_NUMBER_OF_INGREDIENTS = 10;

  useEffect(() => {
    fetchDrinks();
  }, []);

  async function fetchDrinks() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then((res) => res.json())
      .then((data) => {
        setCocktail(data.drinks);
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

  const filteredCocktail = cocktail.filter((data) => {
    return data['strDrink'].toLowerCase().includes(searchTerm) || runThroughIngredients(data);
  });

  return (
    <div>
      <label style={{ color: 'white' }}>Search: </label>
      <input onChange={handleSearchInputChange} />
      {cocktail !== null && <CocktailCardList cocktail={filteredCocktail} />}
    </div>
  );
}

export default App;
