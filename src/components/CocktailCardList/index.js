import React from 'react';
import CocktailCard from '../CocktailCard';

function CocktailCardList({ cocktail }) {
  return (
    <>
      {cocktail.map((cocktail) => {
        return (
          <CocktailCard
            key={cocktail.idDrink}
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
