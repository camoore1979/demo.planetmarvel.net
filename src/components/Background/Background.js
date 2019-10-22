// node modules
import React from 'react';

// styles
import './Background.css';

class Background extends React.PureComponent {
  render() {
    const getRandomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    const backgroundNumber = getRandomInt(4);
    const images = [
      '/splash-image-1.jpg',
      '/splash-image-2.jpeg',
      '/splash-image-3.jpeg',
      '/splash-image-4.jpg'
    ];
    return (
      <div >
        <img className="background" src={images[backgroundNumber]} alt="splash" />
      </div>
    );
  }
}

export default Background;
