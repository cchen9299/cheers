import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { titleStyle, subtitleStyle } from '../../appTheme';
import PillButton from '../PillButton';
import { connect } from 'react-redux';
import dispatchPills from '../../actions/dispatchPills';

function CocktailCard({ cocktail, pillList, dispatchPills }) {
  const [appliedPills, setAppliedPills] = useState(pillList);

  const handleOnClick = (ingredient) => {
    pillList.includes(ingredient)
      ? setAppliedPills((prev) => prev.filter((appliedPills) => appliedPills !== ingredient))
      : setAppliedPills((prev) => prev.concat(ingredient));
  };

  useEffect(() => {
    dispatchPills(appliedPills?.length > 0 ? appliedPills : []);
  }, [appliedPills]);

  return (
    <CocktailCardWrapper>
      <CopyContainer>
        <p style={titleStyle}>{cocktail.strDrink}</p>
        <p style={subtitleStyle}>Main Ingredient</p>
        <PillsContainer>
          <PillButton
            highlighted={appliedPills?.includes(cocktail.ingredients[0])}
            ingredient={cocktail.ingredients[0]}
            onClick={() => {
              handleOnClick(cocktail.ingredients[0]);
            }}
          />
        </PillsContainer>
        <p style={subtitleStyle}>Additional Ingredients</p>
        <PillsContainer>
          {/* {cocktail.ingredients.map((ingredient, index) => {
            if (ingredient !== null && index !== 0) {
              return <PillButton key={index} ingredient={ingredient} />;
            } else return null;
          })} */}
        </PillsContainer>
      </CopyContainer>
      <Image src={cocktail.strDrinkThumb} width="100%" height="100%" alt={cocktail.strDrink} />
    </CocktailCardWrapper>
  );
}
const mapStateToProps = (state) => ({
  pillList: state.pillData.pillList,
});

export default connect(mapStateToProps, { dispatchPills })(CocktailCard);

const CocktailCardWrapper = styled.div`
  width: calc(33% - 8px - 4px);
  border-radius: 5px;
  margin: 0 calc(15px + 1px / 3) 16px 0;
  overflow: hidden;
  position: relative;

  border-width: 2px;
  border-color: whitesmoke;
  border-style: solid;

  @media (min-width: 800px) {
    :nth-child(3n) {
      margin: 0 0 16px 0;
    }
  }
  @media (max-width: 799px) {
    width: calc(50% - 8px);
    :nth-child(2n) {
      margin: 0 0 16px 0;
    }
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
  transition: 0.2s box-shadow, 0.2s z-index;
  -webkit-transition: 0.2s -webkit-box-shadow, 0.2s z-index;
  -moz-transition: 0.2s -moz-box-shadow, 0.2s z-index;
  -ms-transition: 0.2s -ms-box-shadow, 0.2s z-index;
  -o-transition: 0.2s -o-box-shadow, 0.2s z-index;

  box-shadow: 0 0 10px whitesmoke, 2px 0 20px #f0f, -2px 0 20px #0ff;
  :hover {
    box-shadow: 0 0 5px whitesmoke, 2px 0 10px #f0f, -2px 0 10px #0ff;
    z-index: 10;
    > div {
      box-shadow: inset 0 0 10px white, inset 0 0 30px whitesmoke, inset 20px 10px 80px #f0f, inset -20px 20px 80px #0ff;
    }
    img {
      filter: contrast(1.5) brightness(0.9) saturate(1);
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  opacity: 0.8;
  filter: contrast(1.5) brightness(0.3) saturate(0);
  -webkit-transition: 0.2s -webkit-filter;
  -moz-transition: 0.2s -moz-filter;
  -ms-transition: 0.2s -ms-filter;
  -o-transition: 0.2s -o-filter;
  transition: 0.2s filter, 0.2s -webkit-filter;
`;

const CopyContainer = styled.div`
  position: absolute;
  padding: 8px 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  transition: 0.2s box-shadow;
`;

const PillsContainer = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-wrap: wrap;
`;
