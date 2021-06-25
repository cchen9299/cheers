import React from 'react';
import styled from 'styled-components';
import { titleStyle, subtitleStyle } from '../../appTheme';

function CocktailCard({ cocktail, handlePillClick }) {
  const handlePillClickCallBack = (ingredient) => {
    handlePillClick(ingredient);
  };

  return (
    <CocktailCardWrapper>
      <CopyContainer>
        <p style={titleStyle}>{cocktail.strDrink}</p>
        <p style={subtitleStyle}>Main Ingredient</p>
        <PillsContainer>
          <PillButton onClick={() => handlePillClickCallBack(cocktail.ingredients[0])}>
            {cocktail.ingredients[0]}
          </PillButton>
        </PillsContainer>
        <p style={subtitleStyle}>Additional Ingredients</p>
        <PillsContainer>
          {cocktail.ingredients.map(
            (ingredient, index) =>
              ingredient !== null &&
              index !== 0 && (
                <PillButton key={index} onClick={() => handlePillClickCallBack(ingredient)}>
                  {ingredient}
                </PillButton>
              )
          )}
        </PillsContainer>
      </CopyContainer>
      <Image src={cocktail.strDrinkThumb} width="100%" height="100%" alt={cocktail.strDrink} />
    </CocktailCardWrapper>
  );
}

export default CocktailCard;

const PillButton = styled.button`
  font-size: 12px;
  margin-right: 4px;
  margin-bottom: 8px;
  padding: 4px 12px;
  border-radius: 100px;
  font-weight: 900;
  color: white;
  cursor: pointer;
  border-width: 2;
  border-style: solid;
  border-color: #0ff;
  background-color: transparent;
  box-shadow: 0 0 5px #0ff, inset 0 0 5px #0ff;
  text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
  transition: 0.2s all;

  :hover {
    box-shadow: 0 0 10px #0ff, inset 0 0 10px #0ff;
    text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
  }
  :active {
    box-shadow: none;
    background-color: #0ff;
    color: #333;
  }
`;

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
  transition: 0.2s all linear;

  box-shadow: 0 0 10px whitesmoke, 2px 0 20px #f0f, -2px 0 20px #0ff;
  :hover {
    box-shadow: 0 0 5px whitesmoke, 2px 0 10px #f0f, -2px 0 10px #0ff;
    z-index: 10;
    > div {
      box-shadow: inset 0 0 10px white, inset 0 0 30px whitesmoke, inset 20px 10px 80px #f0f, inset -20px 20px 80px #0ff;
    }
    img {
      transition: 0.2sall linear, 0.2s-webkit-all linear;
      filter: contrast(1.5) brightness(0.9) saturate(1);
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  opacity: 0.8;
  filter: contrast(1.5) brightness(0.3) saturate(0);
  -webkit-transition: 0.2s -webkit-all linear;
  -moz-transition: 0.2s -moz-all linear;
  -moz-transition: 0.2s all linear;
  -ms-transition: 0.2s -ms-all linear;
  -o-transition: 0.2s -o-all linear;
  transition: 0.2s all linear, 0.2s -webkit-all linear;
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
  transition: 0.2s all linear;
`;

const PillsContainer = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-wrap: wrap;
`;
