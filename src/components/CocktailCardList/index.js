import React from 'react';
import CocktailCard from '../CocktailCard';

function CocktailCardList({ cocktail }) {
  return (
    <>
      {cocktail.map((cocktail, index) => {
        return <CocktailCard key={index} cocktail={cocktail} />;
      })}
    </>
  );
}

export default CocktailCardList;
