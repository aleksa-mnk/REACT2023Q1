import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => {
  const [searchText, setSearchText] = useState(value);

  useEffect(() => {
    const savedValue = localStorage.getItem('searchText');
    if (savedValue) {
      setSearchText(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchText', searchText);
  }, [searchText]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  const handleClear = () => {
    setSearchText('');
    onSubmit();
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
          onChange(event);
        }}
        onKeyPress={handleKeyPress}
      />
      <button className="search-bar-clear" onClick={handleClear}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
