import React from 'react';
import { useHistory } from 'react-router-dom';
import connect from '../../store/connect';

import { CardColumns } from 'reactstrap';
import './ComicsSearch.css';

import ComicCard from './ComicCard';

const ComicsList = ({ comics = [], dispatchSetComic }) => {
  const history = useHistory();
  function handleClick(id) {
    console.log('handleClick!');
    const selectedComic = comics.find(comic => comic.id === id);
    console.log('selectedComic: ', selectedComic);

    dispatchSetComic(selectedComic);
    console.log('you are here');
    history.push(`/comics/${id}`);
  }
  return (
    <CardColumns>
      {comics.map(({ description, id: comicId, title, thumbnail }, i) => (
        <ComicCard
          key={String(comicId)}
          description={description}
          comicId={comicId}
          title={title}
          thumbnail={thumbnail}
          handleClick={handleClick}
        />
      ))}
    </CardColumns>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchSetComic: comic => dispatch({ type: 'SET_COMIC', comic })
});

export default connect(null, mapDispatchToProps)(ComicsList);
