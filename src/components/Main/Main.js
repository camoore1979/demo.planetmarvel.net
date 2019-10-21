import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CharactersPage from '../CharactersPage';
import ComicsSearchPage from '../ComicsSearchPage/ComicsSearchPage';
import ComicPage from '../ComicPage/ComicPage';
import LandingPage from '../LandingPage';
import MoviesPage from '../MoviesPage';
import NavBar from '../NavBar/NavBar';
import SiteCopyright from '../SiteCopyright';

import './main.css';

export default function Main() {
  return (
    <Router>
      <NavBar />
      <div className="main-container">
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/comics/:comicId'} component={ComicPage} />
          <Route path={'/comics'} component={ComicsSearchPage} />
          <Route path={'/characters'} component={CharactersPage} />
          <Route path={'/movies'} component={MoviesPage} />
        </Switch>
      </div>
      <div className="main-footer">
        <SiteCopyright showAttribution />
      </div>
    </Router>
  );
}
