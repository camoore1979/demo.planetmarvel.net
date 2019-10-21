/**
 * @function getThumbnailSrc
 * @description creates a image source attr for the marvel api,
 * see: https://developer.marvel.com/documentation/images
 */
export default function getThumbnailSrc({ path, extension, imageSize }) {
  return `${path}/${imageSize || 'portrait_small'}.${extension}`;
}
