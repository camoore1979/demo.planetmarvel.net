import React from 'react';
import { useParams } from 'react-router-dom';

import useDocSubTitle from '../../hooks/useDocSubTitle';
import connect from '../../store/connect';


//TODO: handle case where localstorage is empty, but user is authed and needs to fetch the
// record from this route
const ComicsPage = ({ id, title, description }) => {
  useDocSubTitle('Comics');
  const { comicId } = useParams();

  return (
    <div className="comics-search">
      <div className="comics-search-list">
        <div> Comic! {comicId} </div>
        <div> { id }</div>
        <div> { title }</div>

        <p> </p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ comic }) => ({
  ...(comic || {})
});

export default connect(mapStateToProps)(ComicsPage);
