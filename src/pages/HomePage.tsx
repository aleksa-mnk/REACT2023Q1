import React, { useState, useEffect } from 'react';
import { searchGifs } from '../core/config/api';
import SearchBar from '../components/SearchBar/SearchBar';
import Loader from '../components/ui/Loader';
import CardList from '../components/CardList/CardList';
import Modal from '../components/Modal/Modal';
import { ICard } from '../core/types';

const HomePage = () => {
  const [searchText, setSearchText] = useState(() => {
    const storedValue = localStorage.getItem('searchText');
    return storedValue !== null ? storedValue : '';
  });
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState<ICard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('searchText');
    if (storedValue !== null) {
      setSearchText(storedValue);
      searchGifs(storedValue).then((results) => {
        setSearchResults(results);
      });
    }
  }, []);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const results = await searchGifs(searchText);
      setSearchResults(results);
      localStorage.setItem('searchText', searchText);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = (card: ICard) => {
    console.log('Click', card);
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        onSubmit={handleSearch}
      />
      {isLoading ? <Loader /> : <CardList cards={searchResults} onCardClick={handleCardClick} />}
      {selectedCard && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} card={selectedCard} />
      )}
    </>
  );
};

export default HomePage;
