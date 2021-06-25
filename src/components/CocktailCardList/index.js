import React, { useEffect, useMemo, useState } from 'react';
import CocktailCard from '../CocktailCard';
import { connect } from 'react-redux';
import { fetchCocktails } from '../../actions';

function CocktailCardList({ cocktailList, fetchCocktails, searchTerm, isLoading }) {
  const [appliedPill, setAppliedPill] = useState([]);

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
    return appliedPill?.every((pill) => {
      return drink.ingredients.includes(pill);
    });
  };

  const filterByAll = useMemo(() => {
    return cocktailList.filter((drink) => {
      return filterBySearch(drink) && filterByPill(drink);
    });
  }, [searchTerm, appliedPill, cocktailList]);

  const handlePillClickCallBack = (ingredient) => {
    appliedPill.includes(ingredient)
      ? setAppliedPill((prev) => prev.filter((appliedPill) => appliedPill !== ingredient))
      : setAppliedPill((prev) => prev.concat(ingredient));
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
      {filterByAll?.map((cocktail, index) => {
        return (
          <CocktailCard
            appliedPill={appliedPill}
            key={filterByAll[index]?.idDrink}
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

//functioning cross reference filter

// const filteredCocktailList = cocktailList?.filter((drink) => {
//   return (
//     drink.ingredients.some((ingredient) => {
//       return ingredient?.toLowerCase().includes(searchTerm);
//     }) || drink['strDrink'].toLowerCase().includes(searchTerm)
//   );
// });

// const secondFilter = filteredCocktailList?.filter((drink) => {
//   if (appliedPill.length > 0) {
//     return appliedPill.every((pill) => {
//       return drink.ingredients.includes(pill);
//     });
//   } else return filteredCocktailList;
// });

//attempt at combining filters

// const [filteredCocktailList, setFilteredCocktailList] = useState([]);

// useEffect(() => {
//   setFilteredCocktailList(cocktailList);
// }, [isLoading]);

// const filterBySearch = cocktailList?.filter((drink) => {
//   return (
//     drink.ingredients.some((ingredient) => {
//       return ingredient?.toLowerCase().includes(searchTerm);
//     }) || drink['strDrink'].toLowerCase().includes(searchTerm)
//   );
// });

// const filterByPill = cocktailList?.filter((drink) => {
//   if (appliedPill.length > 0) {
//     return appliedPill.every((pill) => {
//       return drink.ingredients.includes(pill);
//     });
//   }else return filterBySearch
// });

// useEffect(() => {
//   setFilteredCocktailList(filterBySearch);
//   setFilteredCocktailList(filterByPill);
// }, [searchTerm, appliedPill]);

// const filteredCocktailList = cocktailList?.filter((drink) => {
//   if (appliedPill.length > 0) {
//     return appliedPill.every((pill) => {
//       return drink.ingredients.includes(pill);
//     });
//   } else {
//     return (
//       drink.ingredients.some((ingredient) => {
//         return ingredient?.toLowerCase().includes(searchTerm);
//       }) || drink['strDrink'].toLowerCase().includes(searchTerm)
//     );
//   }
// });
