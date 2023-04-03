import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface SearchBarProps {
  searchInput: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearInput: () => void;
}

const SearchBar = ({ onInputChange, onClearInput }: SearchBarProps) => {
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

  return (
    <>
      <div className="search-bar-container">
        <input
          data-testid="Home"
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            onInputChange(e);
          }}
        />
        {searchInput.length > 0 && (
          <FaTimes
            data-testid="clear-button"
            className="fas fa-times search-bar-clear"
            onClick={onClearInput}
          />
        )}
      </div>
    </>
  );
};

export default SearchBar;
