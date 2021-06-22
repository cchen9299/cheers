import React, { useEffect, useState } from 'react';

function CocktailCard({ cocktail }) {
  const [ingredients, setIngredients] = useState([]);
  const MAX_NUMBER_OF_INGREDIENTS = 10;

  useEffect(() => {
    runThroughIngredients(cocktail);
  }, [cocktail]);

  const runThroughIngredients = (data) => {
    setIngredients([]);
    for (let i = 2; i <= MAX_NUMBER_OF_INGREDIENTS; i++) {
      if (data['strIngredient' + i] !== null) {
        setIngredients((prev) => prev.concat(data['strIngredient' + i]));
      }
    }
  };

  return (
    <div style={{ backgroundColor: 'tomato', minHeight: 100, minWidth: 100 }}>
      <p>{cocktail.strDrink}</p>
      <img src={cocktail.strDrinkThumb} width="100" height="100" />
      <p>{cocktail.strIngredient1}</p>
      {ingredients.map((ingredient, index) => (
        <p key={index}>{ingredient}</p>
      ))}
    </div>
  );
}

export default CocktailCard;
