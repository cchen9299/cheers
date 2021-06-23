import React, { useEffect } from 'react';
import CocktailCard from '../CocktailCard';
import { connect } from 'react-redux';
import { fetchCocktails } from '../../actions';

function CocktailCardList({ cocktail, fetchCocktails, searchTerm }) {
  const MAX_NUMBER_OF_INGREDIENTS = 10;

  useEffect(() => {
    fetchCocktails();
  }, []);

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
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 auto' }}>
      {filteredCocktail?.map((cocktail, index) => {
        return <CocktailCard key={index} cocktail={cocktail} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cocktail: state.items,
});

export default connect(mapStateToProps, { fetchCocktails })(CocktailCardList);
