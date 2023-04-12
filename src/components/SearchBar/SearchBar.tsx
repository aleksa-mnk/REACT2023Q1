import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const searchInputFromLocalStorage = localStorage.getItem('searchInput');
    if (searchInputFromLocalStorage) {
      setSearchInput(searchInputFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchInput', searchInput);
  }, [searchInput]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={value ? value : searchInput}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
