import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import getMarvelImgSrc from '../../helpers/getMarvelImgSrc';
import isHtml from 'is-html';

const shortenText = text => `${text.substr(0, 240)}...`;

const ComicCard = ({ description, comicId, title, thumbnail, handleClick }) => {
  // const { comicData }
  const cardImgSrc = getMarvelImgSrc({
    ...thumbnail,
    imageSize: 'portrait_fantastic'
  });
  return (
    <div className="comic-card">
      <Card onClick={() => handleClick(comicId)}>
        <CardImg top wcomicIdth="100%" src={cardImgSrc} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <strong>{title}</strong>
          </CardTitle>
          <CardText>
            {description && !isHtml(description) && shortenText(description)}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ComicCard;
