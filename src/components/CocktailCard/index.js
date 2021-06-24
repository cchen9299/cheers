import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { titleStyle, subtitleStyle, pillStyle } from '../../appTheme';

function CocktailCard({ cocktail }) {
  const [ingredients, setIngredients] = useState([]);
  const MAX_NUMBER_OF_INGREDIENTS = 10;

  useEffect(() => {
    runThroughIngredients(cocktail);
  }, [cocktail]);

  const toSentenceCase = (string) => {
    return string
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join(' ');
  };

  const runThroughIngredients = (data) => {
    setIngredients([]);
    for (let i = 2; i <= MAX_NUMBER_OF_INGREDIENTS; i++) {
      if (data['strIngredient' + i] !== null) {
        setIngredients((prev) => prev.concat(toSentenceCase(data['strIngredient' + i])));
      }
    }
  };

  return (
    <CocktailCardWrapper>
      <CopyContainer>
        <p style={titleStyle}>{cocktail.strDrink}</p>
        <p style={subtitleStyle}>Main Ingredient</p>
        <PillsContainer>
          <p style={pillStyle}>{toSentenceCase(cocktail.strIngredient1)}</p>
        </PillsContainer>
        <p style={subtitleStyle}>Additional Ingredients</p>
        <PillsContainer>
          {ingredients.map((ingredient, index) => (
            <p key={index} style={pillStyle}>
              {ingredient}
            </p>
          ))}
        </PillsContainer>
      </CopyContainer>
      <Image src={cocktail.strDrinkThumb} width="100%" height="100%" alt={cocktail.strDrink} />
    </CocktailCardWrapper>
  );
}

export default CocktailCard;

const CocktailCardWrapper = styled.div`
  background-color: #444;
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
  transition: 0.2s all;

  box-shadow: 0 0 10px whitesmoke, 2px 0 20px #f0f, -2px 0 20px #0ff;
  :hover {
    box-shadow: 0 0 5px whitesmoke, 2px 0 10px #f0f, -2px 0 10px #0ff;
    z-index: 10;
    > div {
      box-shadow: inset 0 0 10px white, inset 0 0 30px whitesmoke, inset 20px 10px 80px #f0f, inset -20px 20px 80px #0ff;
    }
  }
`;

const Image = styled.img`
  filter: contrast(1.5) brightness(0.9) saturate(1.25);
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
  transition: 0.2s all;
`;

const PillsContainer = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-wrap: wrap;
`;
