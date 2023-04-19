import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CardList from '../components/CardList/CardList';
import Loader from '../components/ui/Loader';
import { getSearchValue } from '../core/store/searchSlice';
import { useSelector } from 'react-redux';
import { useSearchGifsQuery } from '../core/store/giphyApi';

const HomePage = () => {
  const search = useSelector(getSearchValue);
  const { data = [], isError, isFetching } = useSearchGifsQuery({ query: search });

  return (
    <>
      <SearchBar />
      {isFetching ? <Loader /> : isError ? <div>No data</div> : <CardList cards={data} />}
    </>
  );
};

export default HomePage;
