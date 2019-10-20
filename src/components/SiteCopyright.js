import React from 'react';

export default () => {
  const today = new Date();
  const year = today.getFullYear();
  return <div>Planet Marvel &copy; {`${year}`}</div>;
};
