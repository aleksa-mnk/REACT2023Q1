import React from 'react';
import CardList from '../CardList/CardList';

interface SearchBarProps {
  initialValue?: string;
}

interface SearchBarState {
  inputValue: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state: SearchBarState = {
    inputValue: '',
  };

  componentDidMount() {
    const savedInputValue = localStorage.getItem('searchBarInputValue');
    if (savedInputValue) {
      this.setState({ inputValue: savedInputValue });
    } else if (this.props.initialValue) {
      this.setState({ inputValue: this.props.initialValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchBarInputValue', this.state.inputValue);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ inputValue: value });
    localStorage.setItem('searchBarInputValue', value);
  };

  render() {
    return (
      <>
        <div className="input">
          <input
            type="text"
            className="input__field"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Search"
          />
        </div>
        <CardList searchString={this.state.inputValue} />
      </>
    );
  }
}

export default SearchBar;
