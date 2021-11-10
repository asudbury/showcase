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
    <Router basename="/showcase">
      <Switch>
        <Route
          exact
          path={['/netflix/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-netflix-clone" />
          )}
        />
        <Route
          exact
          path={['/spotify/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-spotify-clone/" />
          )}
        />
        <Route
          exact
          path={['/twitter/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-twitter-clone/" />
          )}
        />
        <Route
          exact
          path={['/gmail/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-gmail-clone/" />
          )}
        />
        <Route
          exact
          path={['/airbnb/']}
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
        <Route exact path={['/spacex/launch/:launchId']} component={Launch} />
        <Route exact path={['/spacex/']} component={Launches} />
        <Route exact path={['/charts/']} component={Charts} />
        <Route exact path={['/spreadsheet/']} component={SpreadSheet} />
        <Route
          exact
          path={['/calculator/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/react-calculator/" />
          )}
        />
        <Route
          exact
          path={['/temperature-calculator/']}
          component={Calculator}
        />
        <Route
          exact
          path={['/space-invaders/']}
          render={() => (
            <IframeContainer url="https://asudbury.github.io/space_invaders/" />
          )}
        />
        <Route
          exact
          path={['/fireworks/']}
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
