import React, { useState } from 'react';

import './ComicsSearch.css';
import fetchFromMarvelApi from '../../services/marvelApi';
import ComicsList from './ComicsList';
import SearchInput from '../SearchInput/SearchInput';
import Loader from '../Loader/Loader';
import useDocSubTitle from '../../hooks/useDocSubTitle';

const ComicsSearchPage = () => {
  useDocSubTitle('Comics');
  const [comics, setComics] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSearch = async event => {
    setIsEmpty(false);
    if (event.key === 'Enter') {
      if (!searchString) return setComics([]);
      setIsLoading(true);
      const data = await fetchFromMarvelApi('/comics', {
        searchParams: { title: searchString }
      });
      const returnedComics = data.data.results;
      setComics(returnedComics);
      setIsLoading(false);
      if (!returnedComics || returnedComics.length === 0) setIsEmpty(true);
    }
  };

  return (
    <div className="comics-search">
      <SearchInput
        searchString={searchString}
        onChange={event => {
          setSearchString(event.target.value);
        }}
        onKeyPress={handleSearch}
      />

      <div className="comics-search-list">
        {isEmpty && <p>No titles found.</p>}
        {isLoading ? <Loader /> : <ComicsList comics={comics} />}
      </div>
    </div>
  );
};

export default ComicsSearchPage;
