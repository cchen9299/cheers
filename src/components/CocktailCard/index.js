import React, { useEffect, useState } from 'react';
import { titleStyle, subtitleStyle, theme, pillStyle } from '../../appTheme';

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
    <div style={styles.wrapper}>
      <img src={cocktail.strDrinkThumb} width="100%" height="auto" alt={cocktail.strDrink} />
      <div style={styles.copyContainer}>
        <p style={titleStyle}>{cocktail.strDrink}</p>
        <p style={subtitleStyle}>Main Ingredient</p>
        <div style={styles.pillsWrapper}>
          <p style={pillStyle}>{cocktail.strIngredient1}</p>
        </div>
        <p style={subtitleStyle}>Additional Ingredients</p>
        <div style={styles.pillsWrapper}>
          {ingredients.map((ingredient, index) => (
            <p key={index} style={pillStyle}>
              {ingredient}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;

const styles = {
  wrapper: {
    backgroundColor: '#444',
    width: `calc(25% - ${theme.spacing.u1}px)`,
    borderRadius: 5,
    overflow: 'hidden',
    margin: `0 ${theme.spacing.u1}px ${theme.spacing.u1}px 0`,
  },
  copyContainer: {
    padding: `${theme.spacing.u1}px ${theme.spacing.u2}px`,
    display: 'flex',
    flexDirection: 'column',
  },
  pillsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
