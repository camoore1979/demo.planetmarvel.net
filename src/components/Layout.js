import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

import ComicsList from './ComicsList';
import Comic from './Comic';

export default function Layout() {
  return (
    <Router>
        <Switch>
          <Route path={'/comics'} component={ComicsList}/>
          <Route path={'/comic'} component={Comic}/>
        </Switch>
    </Router>
  );
}
