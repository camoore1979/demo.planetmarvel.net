import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ComicsList from '../ComicsSearch/ComicsList';
import Comic from '../Comic';
import Landing from '../Landing';
import NavBar from '../NavBar/NavBar';
import SiteCopyright from '../SiteCopyright';

import './main.css';

export default function Main() {
  return (
    <Router>
      <NavBar />
      <div className="main-container">
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route path={'/comics'} component={ComicsList} />
          <Route path={'/comic'} component={Comic} />
          <Route path={'/comingsoon'}>
            <div>COMING SOON</div>
          </Route>
        </Switch>
      </div>
      <div className="main-footer">
        <SiteCopyright showAttribution/>
      </div>
    </Router>
  );
}
