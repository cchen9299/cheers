import React, { useEffect, useState } from 'react';
import cocktail_data from './cocktail.data';
import CocktailCardList from './components/CocktailCardList';

function App() {
  const [cocktail, setCocktail] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const MAX_NUMBER_OF_INGREDIENTS = 10;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  useEffect(() => {
    fetchDrinks();
  }, []);

  async function fetchDrinks() {
    Promise.all(
      alphabet.map((letter) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then((res) => res.json());
      })
    )
      .then((data) =>
        data.forEach((subdata) => {
          if (subdata.drinks !== null) {
            setCocktail((previousState) => previousState.concat(subdata.drinks));
          }
        })
      )
      .catch((error) => console.log(error));
  }

  console.log(cocktail);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const runThroughIngredients = (data) => {
    for (let j = 1; j <= MAX_NUMBER_OF_INGREDIENTS; j++) {
      if (data['strIngredient' + j] !== null) {
        if (data['strIngredient' + j].toLowerCase().includes(searchTerm) === false) {
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
