import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';
import Navbar from './Navbar';
import ComicsList from './ComicsList';
import Comic from './Comic';

export default function Layout() {
  let { path } = useRouteMatch();
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path={`${path}/comics`}>
            <ComicsList />
          </Route>
          <Route path={`${path}/comic`}>
            <Comic />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }
