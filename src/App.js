import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CocktailCardList from './components/CocktailCardList';

function App({ pillList }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Cheers</h1>
      <Input onChange={handleSearchInputChange} placeholder="Search Name or Ingredient" />
      {pillList?.map((ingredient, index) => {
        return <div key={index}>{ingredient}</div>;
      })}
      {<CocktailCardList searchTerm={searchTerm} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  pillList: state.pillData.pillList,
});

export default connect(mapStateToProps)(App);

const Input = styled.input`
  border-radius: 30px;
  display: flex;
  width: calc(100% - 48px);
  padding: 8px 24px;
  min-height: 30px;
  flex: 1;
  font-size: 16;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 16px 0;
  caret-color: white;
  outline-width: 0;
  color: white;
  border-width: 2;
  border-color: white;
  border-style: solid;
  text-shadow: 0 0 5px whitesmoke;
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
