import React from 'react';
import sanitizeHtml from 'sanitize-html';
import isHtml from 'is-html';

export default function ComicDescription({ description }) {
  const cleanedHtml = sanitizeHtml(description);
  return isHtml(description) ? (
    <div dangerouslySetInnerHTML={{ __html: cleanedHtml }} />
  ) : (
    <span>{description}</span>
  );
}
