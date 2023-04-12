import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
      <div>
        <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange}
            onKeyPress={handleKeyPress}
        />
        <button onClick={onSubmit}>Search</button>
      </div>
  );
};

export default SearchBar;
