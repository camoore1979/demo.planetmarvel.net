import React from 'react';


// useEffect(() => {
//   var elem = document.getElementsByClassName('login-image');
//   var pos = 0;
  // var id = setInterval(frame, 10);
  // function frame() {
  //   if (pos == 350) {
  //     clearInterval(id);
  //   } else {
  //     pos++;
  //     elem.style.top = pos + 'px';
  //     elem.style.left = pos + 'px';
  //   }
  // }
// });

export default ({ height, width } = { height: '120px', width: '120px' }) => (
  <img
    alt="planet marvel logo"
    src="planet-marvel-logo.png"
    height={height}
    width={width}
  />
);
