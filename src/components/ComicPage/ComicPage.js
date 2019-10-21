import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Media } from 'reactstrap';
import useDocSubTitle from '../../hooks/useDocSubTitle';
import connect from '../../store/connect';
import getMarvelImgSrc from '../../helpers/getMarvelImgSrc';
import moment from 'moment';
import './ComicPage.css';

//TODO: handle case where localstorage is empty, but user is authed and needs to fetch the
// record from this route
const ComicsPage = ({
  creators,
  dates,
  description,
  id,
  issueNumber,
  thumbnail,
  series,
  title
}) => {
  const history = useHistory();
  useDocSubTitle(title);
  const cardImgSrc = getMarvelImgSrc({
    ...thumbnail,
    imageSize: 'portrait_uncanny'
  });
  const { date: publishDate } = dates.find(d => d.type === 'onsaleDate');
  const creatorsString =
    creators &&
    creators.items &&
    creators.items.map(c => `${c.name} (${c.role})`).join(', ');

  return (
    <div className="comic-page">
      <div className="comic-page-view">
        <img className="comic-page-img" src={cardImgSrc} alt={`${title}`} />

        <Media className="comic-page-information">
          <Media body>
            <Media list>
              <Media heading>{title}</Media>
              <Media>{series.name}</Media>
              <Media>
                {publishDate && moment(publishDate).format('MMMM D, YYYY')}
              </Media>
              <Media>Issue #{issueNumber}</Media>
            </Media>
            <Media>{description}</Media>
            <br />
            <Media>{creatorsString}</Media>
          </Media>
        </Media>
        <Button color="link" onClick={() => history.push('/comics')}>
          Return to List
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ comic }) => ({
  ...(comic || {})
});

export default connect(mapStateToProps)(ComicsPage);
