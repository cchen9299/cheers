import React from 'react';
import CocktailCard from '../CocktailCard';

function CocktailCardList({ cocktail }) {
  return (
    <>
      {cocktail.map((cocktail, index) => {
        return (
          <CocktailCard
            key={index}
            name={cocktail.strDrink}
            baseSpirit={cocktail.strIngredient1}
            ingredients={cocktail.strIngredient2}
          />
        );
      })}
    </>
  );
}

export default CocktailCardList;
