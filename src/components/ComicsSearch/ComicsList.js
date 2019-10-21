import React, { useEffect, useState } from 'react';
import { CardColumns } from 'reactstrap';

import './ComicsSearch.css';

import ComicCard from './ComicCard';
import Loader from '../Loader/Loader';
import fetchFromMarvelApi from '../../services/marvelApi/';

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchFromMarvelApi('/comics');
      const returnedComics = data.data.results;
      setComics(returnedComics);
      setIsLoading(false);
    }
    fetchData();
  });
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <CardColumns>
          {comics.map((comic, i) => (
            <ComicCard key={i.toString()} {...comic} />
          ))}
        </CardColumns>
      )}
    </div>
  );
};

export default ComicsList;
