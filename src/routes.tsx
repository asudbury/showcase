import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Launches from './components/spacex/launches';
import Launch from './components/spacex/launch';
import Calculator from './components/temperature-calculator';
import Charts from './components/charts/Charts';
import SpreadSheet from './components/spreadsheet/spreadsheet';
import IframeContainer from './components/iframe/iframeContainer';

export default function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={['/showcase/netflix/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-netflix-clone" />
          )}
        />
        <Route
          exact
          path={['/showcase/spotify/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-spotify-clone/" />
          )}
        />
        <Route
          exact
          path={['/showcase/twitter/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-twitter-clone/" />
          )}
        />
        <Route
          exact
          path={['/showcase/gmail/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-gmail-clone/" />
          )}
        />
        <Route
          exact
          path={['/showcase/airbnb/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-airbnb-clone/" />
          )}
        />
        <Route
          exact
          path={['/youtube/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-youtube-clone/" />
          )}
        />
        <Route
          exact
          path={['/showcase/spacex/launch/:launchId']}
          component={Launch}
        />
        <Route exact path={['/showcase/spacex/']} component={Launches} />
        <Route exact path={['/showcase/charts/']} component={Charts} />
        <Route
          exact
          path={['/showcase/spreadsheet/']}
          component={SpreadSheet}
        />
        <Route
          exact
          path={['/showcase/calculator/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-calculator/" />
          )}
        />
        <Route
          exact
          path={['/showcase/temperature-calculator/']}
          component={Calculator}
        />
        <Route
          exact
          path={['/showcase/space-invaders/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/space_invaders/" />
          )}
        />
        <Route
          exact
          path={['/showcase/fireworks/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/fireworks/" />
          )}
        />
        <Route exact path={['/showcase/']} component={Dashboard} />
        <Route component={Dashboard} />
      </Switch>
    </Router>
  );
}
