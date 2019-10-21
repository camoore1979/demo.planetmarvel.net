import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import ComicsList from './ComicsList';
import Comic from './Comic';
import Landing from './Landing';

export default function Main() {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route path={'/comics'} component={ComicsList} />
          <Route path={'/comic'} component={Comic} />
          <Route path={'/comingsoon'}>
            <div>COMING SOON</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
