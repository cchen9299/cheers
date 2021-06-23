import React, { useState } from 'react';
import CocktailCardList from './components/CocktailCardList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <input onChange={handleSearchInputChange} style={styles.input} placeholder="Search Name or Ingredient" />
      {<CocktailCardList searchTerm={searchTerm} />}
    </div>
  );
}

export default App;

const styles = {
  input: {
    borderRadius: 30,
    display: 'flex',
    width: 'calc(100% - 40px)',
    padding: '8px 24px',
    height: 30,
    fontSize: 16,
    backgroundColor: '#444',
    margin: '16px 0',
    caretColor: 'white',
    borderWidth: 0,
    outlineWidth: 0,
    color: 'white',
  },
};
