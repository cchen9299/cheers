import React, { useEffect, useMemo } from 'react';
import CocktailCard from '../CocktailCard';
import { connect } from 'react-redux';
import { fetchCocktails } from '../../actions';

function CocktailCardList({ cocktailList, fetchCocktails, searchTerm, isLoading, pillList }) {
  useEffect(() => {
    fetchCocktails();
  }, [fetchCocktails]);

  const filterBySearch = (drink) => {
    return (
      drink.ingredients?.some((ingredient) => {
        return ingredient?.toLowerCase().includes(searchTerm);
      }) || drink['strDrink'].toLowerCase().includes(searchTerm)
    );
  };

  const filterByPill = (drink) => {
    return pillList?.every((pill) => {
      return drink.ingredients.includes(pill);
    });
  };

  const filterByAll = useMemo(() => {
    return cocktailList.filter((drink) => {
      return filterBySearch(drink) && filterByPill(drink);
    });
  }, [cocktailList, filterByPill, filterBySearch]);

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
      {filterByAll?.map((cocktail, index) => {
        return <CocktailCard key={filterByAll[index]?.idDrink} cocktail={cocktail} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  pillList: state.pillData.pillList,
  cocktailList: state.cocktailAPI.cocktailList,
  isLoading: state.cocktailAPI.isLoading,
});

export default connect(mapStateToProps, { fetchCocktails })(CocktailCardList);
