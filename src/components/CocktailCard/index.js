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
    <div style={styles.wrapper}>
      <img src={cocktail.strDrinkThumb} width="100%" height="auto" alt={cocktail.strDrink} />
      <div style={styles.copyContainer}>
        <p style={styles.title}>{cocktail.strDrink}</p>
        <p style={styles.subtitle}>Main Ingredient</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <p style={styles.pills}>{cocktail.strIngredient1}</p>
        </div>
        <p style={styles.subtitle}>Additional Ingredients</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {ingredients.map((ingredient, index) => (
            <p key={index} style={styles.pills}>
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
    width: 'calc(25% - 8px)',
    borderRadius: 5,
    overflow: 'hidden',
    margin: '0 8px 8px 0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: '27px',
    marginBottom: 4,
  },
  copyContainer: {
    padding: '8px 16px',
    display: 'flex',
    flexDirection: 'column',
  },
  subtitle: {
    color: '#999',
    fontWeight: '500',
    marginBottom: 4,
  },
  pills: {
    fontSize: '12px',
    marginRight: '4px',
    marginBottom: '8px',
    padding: '0 8px',
    backgroundColor: '#777',
    borderRadius: 100,
    fontWeight: '700',
  },
};
