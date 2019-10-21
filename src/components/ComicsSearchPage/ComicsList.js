import React from 'react';
import { useHistory } from 'react-router-dom';

import { CardColumns } from 'reactstrap';
import './ComicsSearch.css';

import ComicCard from './ComicCard';
import connect from '../../store/connect';

const ComicsList = ({ comics = [], dispatchSetComic }) => {
  const history = useHistory();
  const handleClick = id => {
    const selectedComic = comics.find(c => c.id === id);
    dispatchSetComic(selectedComic);
    history.push(`/comics/${id}`);
  };
  return (
    <CardColumns>
      {comics.map((comic, i) => (
        <ComicCard key={i.toString()} {...comic} onClick={handleClick} />
      ))}
    </CardColumns>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchSetComic: comic => dispatch({ type: 'SET_COMIC', comic })
  };
};

export default connect(mapDispatchToProps)(ComicsList);
