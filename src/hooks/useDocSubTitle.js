import { useEffect } from 'react';

import config from '../config/config';
const { appTitle = 'Planet Marvel' } = config;

const setTitle = subTitle =>
  (document.title = subTitle ? `${appTitle} | ${subTitle}` : `${appTitle}`);

export default function useDocSubTitle(subTitle) {
  useEffect(() => {
    setTitle(subTitle);
    return () => setTitle();
  });
}
