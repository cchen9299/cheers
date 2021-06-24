import React, { useEffect } from 'react';
import CocktailCard from '../CocktailCard';
import { connect } from 'react-redux';
import { fetchCocktails } from '../../actions';

function CocktailCardList({ cocktail, fetchCocktails, searchTerm, isLoading }) {
  const MAX_NUMBER_OF_INGREDIENTS = 10;

  useEffect(() => {
    fetchCocktails();
  }, [fetchCocktails]);

  const runThroughIngredients = (data) => {
    for (let i = 1; i <= MAX_NUMBER_OF_INGREDIENTS; i++) {
      if (data['strIngredient' + i] !== null) {
        if (data['strIngredient' + i].toLowerCase().includes(searchTerm) === false) {
        } else return true;
      }
    }
  };

  const filteredCocktail = cocktail?.filter((data) => {
    return data['strDrink'].toLowerCase().includes(searchTerm) || runThroughIngredients(data);
  });

  if (isLoading) {
    return (
      <h2
        style={{
          color: 'white',
        }}
      >
        Boozing up...
      </h2>
    );
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1, margin: '0 auto', width: '100%' }}>
      {filteredCocktail?.map((cocktail, index) => {
        return <CocktailCard key={filteredCocktail[index]?.idDrink} cocktail={cocktail} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cocktail: state.cocktails.items,
  isLoading: state.cocktails.isLoading,
});

export default connect(mapStateToProps, { fetchCocktails })(CocktailCardList);
