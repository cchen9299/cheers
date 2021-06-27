import React from 'react';
import styled from 'styled-components';
import { titleStyle, subtitleStyle } from '../../appTheme';
import PillButton from '../PillButton';

export default function CocktailCard({ cocktail, onClick }) {
  return (
    <CocktailCardWrapper onClick={onClick} id={'cocktailCard'}>
      <CopyContainer>
        <p style={{ ...titleStyle, fontSize: 48, marginTop: 8 }}>{cocktail.strDrink}</p>
        <div>
          <p style={{ width: 100, ...subtitleStyle }}>
            Primary <br /> Ingredient
          </p>
          <Spacer height={5} />
          <PillsContainer>
            <PillButton ingredient={cocktail.ingredients[0]} />
          </PillsContainer>
          <Spacer height={10} />
          <p style={{ width: 100, ...subtitleStyle }}>
            Additional <br /> Ingredients
          </p>
          <Spacer height={5} />
          <PillsContainer>
            {cocktail.ingredients.map((ingredient, index) => {
              if (ingredient !== null && index !== 0) {
                return <PillButton negateMargin key={index} ingredient={ingredient} />;
              } else return null;
            })}
          </PillsContainer>
        </div>
      </CopyContainer>
      <Image src={cocktail.strDrinkThumb} width="100%" height="100%" alt={cocktail.strDrink} />
    </CocktailCardWrapper>
  );
}

const Spacer = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

const CocktailCardWrapper = styled.div`
  width: calc(33% - 8px - 4px);
  border-radius: 5px;
  margin: 0 calc(15px + 1px / 3) 16px 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  border-width: 2px;
  border-style: solid;
  border-color: transparent;

  @media (min-width: 800px) {
    :nth-child(3n) {
      margin: 0 0 16px 0;
    }
  }
  @media (max-width: 799px) {
    width: calc(50% - 8px - 4px);
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
    border-color: whitesmoke;
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
  :active {
    > div {
      box-shadow: inset 0 0 10px white, inset 0 0 20px whitesmoke, inset 5px 5px 50px #f0f, inset -5px 5px 50px #0ff;
    }
    box-shadow: 0 0 5px whitesmoke, 2px 0 30px #f0f, -2px 0 30px #0ff;
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
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  transition: 0.2s box-shadow;
`;

const PillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
`;
// align-items: flex-start;
// flex: 1;
// flex-direction: column;
// background-color: rgba(150, 255, 255, 0.1);
// text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
// padding: 10px;
// border-width: 1px;
// border-color: rgba(80, 80, 80);
// border-style: solid;
