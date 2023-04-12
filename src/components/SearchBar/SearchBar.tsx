import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => {
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
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-bar-clear" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
