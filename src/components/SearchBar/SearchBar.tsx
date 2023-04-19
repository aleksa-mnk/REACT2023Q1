import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../core/store/store';
import { getSearchValue, setValue } from '../../core/store/searchSlice';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const saveSearch = useSelector(getSearchValue);

  const [search, setSearch] = useState(saveSearch);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setValue(search));
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    setSearch(e.currentTarget.value);

  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        className="search-bar"
        onChange={handleInputChange}
        value={search}
        data-testid="Home"
      />
      <button type="submit" className="search-bar-submit" data-testid="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
