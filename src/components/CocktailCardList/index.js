import React from 'react';
import CocktailCard from '../CocktailCard';

function CocktailCardList({ cocktail }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 auto' }}>
      {cocktail.map((cocktail, index) => {
        return <CocktailCard key={index} cocktail={cocktail} />;
      })}
    </div>
  );
}

export default CocktailCardList;
