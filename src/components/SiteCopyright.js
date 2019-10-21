import React from 'react';

export default ({ showAttribution }) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <span>Planet Marvel &copy; {`${year}`}</span>.
      {showAttribution && (
        <div>
          All Marvel product data is provided from Marvel.com &copy; Marvel{' '}
          {`${year}`}.
        </div>
      )}
    </div>
  );
};
