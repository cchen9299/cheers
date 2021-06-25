import React, { useEffect, useState } from 'react';
import CocktailCard from '../CocktailCard';
import { connect } from 'react-redux';
import { fetchCocktails } from '../../actions';

function CocktailCardList({ cocktailList, fetchCocktails, searchTerm, isLoading }) {
  const [appliedPill, setAppliedPill] = useState([]);

  useEffect(() => {
    fetchCocktails();
  }, [fetchCocktails]);

  const filteredCocktailList = cocktailList?.filter((drink) => {
    return (
      drink.ingredients.some((ingredient) => {
        return ingredient?.toLowerCase().includes(searchTerm);
      }) || drink['strDrink'].toLowerCase().includes(searchTerm)
    );
  });

  const handlePillClickCallBack = (ingredient) => {
    !appliedPill.includes(ingredient) && setAppliedPill((prev) => prev.concat(ingredient.toLowerCase()));
  };

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
      {filteredCocktailList?.map((cocktail, index) => {
        return (
          <CocktailCard
            key={filteredCocktailList[index]?.idDrink}
            cocktail={cocktail}
            handlePillClick={handlePillClickCallBack}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cocktailList: state.cocktailAPI.cocktailList,
  isLoading: state.cocktailAPI.isLoading,
});

export default connect(mapStateToProps, { fetchCocktails })(CocktailCardList);
