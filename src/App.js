import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dispatchPills from './actions/dispatchPills';
import CocktailCardList from './components/CocktailCardList';
import ModalContent from './components/ModalContent';
import PillButton from './components/PillButton';
import { toSentenceCase } from './util/helper';

function App({ pillList, dispatchPills }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalCocktail, setModalCocktail] = useState({});

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSearchInputSubmit = (event) => {
    if (event.key === 'Enter') {
      const sentenceCaseSearchTerm = toSentenceCase(event?.target.value);
      !pillList.includes(sentenceCaseSearchTerm) && dispatchPills(pillList.concat(sentenceCaseSearchTerm));
    }
  };

  const handleCardOnClick = (event, cocktail) => {
    setModalCocktail(cocktail);
    setShowModal(true);
  };

  const handleHideModal = (value) => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      <h1>Cheers</h1>
      <SearchContainer>
        <Input
          type="text"
          onChange={handleSearchInputChange}
          onKeyDown={handleSearchInputSubmit}
          placeholder="Search Name or Ingredient"
        />
        <Spacer height={10} />
        <PillsContainer>
          {pillList?.map((ingredient, index) => {
            return <PillButton key={index} ingredient={ingredient} negateMargin />;
          })}
        </PillsContainer>
      </SearchContainer>
      <Spacer height={30} />
      {<CocktailCardList searchTerm={searchTerm} handleCardOnClick={handleCardOnClick} />}
      {showModal && (
        <ModalContent showModal={showModal} handleHideModal={handleHideModal} modalCocktail={modalCocktail} />
      )}
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  pillList: state.pillData.pillList,
});

export default connect(mapStateToProps, { dispatchPills })(App);

const Spacer = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  position: sticky;
  width: 100%;
  top: 15px;
  z-index: 10;
`;

const PillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Input = styled.input`
  border-radius: 30px;
  display: flex;
  width: calc(100% - 48px);
  padding: 8px 24px;
  min-height: 30px;
  flex: 1;
  font-size: 16;
  background-color: rgba(0, 0, 0, 0.2);
  caret-color: white;
  outline-width: 0;
  color: white;
  border-width: 2;
  border-color: white;
  border-style: solid;
  text-shadow: 0 0 5px whitesmoke;
  z-index: 999;
  box-shadow: 0 0 5px whitesmoke, 0 0 10px purple, 0 0 10px blue;
  :hover,
  :focus {
    background-color: rgba(70, 70, 70, 0.8);
    box-shadow: 0 0 20px whitesmoke, 0 0 30px blue, 0 0 30px purple, inset 0 0 20px whitesmoke, inset 0 0 40px purple,
      inset 40px 40px 40px purple, inset -40px -40px 40px blue;
    transition: all 0.2s;
  }
  ::placeholder {
    color: #f1f1f1;
  }
`;
