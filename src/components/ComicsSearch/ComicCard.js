import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const getThumbnailSrc = ({ path, extension, imageSize }) => {
  return `${path}/${imageSize || 'portrait_small'}.${extension}`;
};

const shortenText = text => `${text.substr(0,240)}...`

const ComicCard = ({ description, title, thumbnail }) => {
  // const { comicData }
  const cardImgSrc = getThumbnailSrc({
    ...thumbnail,
    imageSize: 'portrait_fantastic'
  });
  return (
    <div className="comic-card">
      <Card onClick={() => alert('click!')}>
        <CardImg top width="100%" src={cardImgSrc} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <strong>{title}</strong>
          </CardTitle>
          <CardText>{description && shortenText(description)}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default ComicCard;
