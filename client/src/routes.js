import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import NewCampaign from './containers/NewCampaign';
import CampaignPage from './containers/CampaignPage';
import Tips from './containers/Tips';
import DenverInfo from './containers/DenverInfo';
import ManagerResources from './containers/ManagerResources';
import NotFound from './containers/NotFound';


export default (
  <Route
    path="/"
    getComponent={(location, callback) => callback(null, App)}
  >
    <IndexRoute
      getComponent={(location, callback) => callback(null, Home)}
    />
    <Route
      path="/campaign"
      onEnter={(nextState, replace) => !nextState.params.id && replace('/campaign/new')}
    />
    <Route
      path="/campaign/new"
      getComponent={(location, callback) => callback(null, NewCampaign)}
    />
    <Route
      path="/campaign/:id"
      getComponent={(location, callback) => callback(null, CampaignPage)}
    />
    <Route
      path="/tips-for-requesting"
      getComponent={(location, callback) => callback(null, Tips)}
    />
    <Route
      path="/denver-recycling-info"
      getComponent={(location, callback) => callback(null, DenverInfo)}
    />
    <Route
      path="/manager-resources"
      getComponent={(location, callback) => callback(null, ManagerResources)}
    />
    <Route
      path="/error"
      status={404}
      getComponent={(location, callback) => callback(null, NotFound)}
    />
    {/* Catch all route */}
    <Route
      path="*"
      status={404}
      onEnter={(nextState, replace) => replace('/error')}
    />
  </Route>
);
