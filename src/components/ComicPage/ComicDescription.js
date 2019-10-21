import React from 'react';
import sanitizeHtml from 'sanitize-html';

export default function ComicDescription({ description }) {
  const cleanedHtml = sanitizeHtml(description);
  return <div dangerouslySetInnerHTML={{ __html: cleanedHtml }} />;
}
