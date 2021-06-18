import React from 'react';

function CocktailCard({ name, baseSpirit, ingredients }) {
  return (
    <div style={{ backgroundColor: 'tomato', minHeight: 100, minWidth: 100 }}>
      <p>{name}</p>
      <p>{baseSpirit}</p>
      <p>{ingredients}</p>
    </div>
  );
}

export default CocktailCard;
