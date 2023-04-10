import * as React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import CurdSnackList from '../components/CardList/CardList';
import data from '../core/data/curdSnackData.json';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  function handleClearInput() {
    setSearchInput('');
  }

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        onInputChange={handleInputChange}
        onClearInput={handleClearInput}
      />
      <CurdSnackList data={data} searchText={searchInput} />
    </>
  );
};

export default HomePage;
