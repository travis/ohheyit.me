import React, { Fragment } from 'react';
import { PrivateLayout, PublicLayout, NotLoggedInLayout } from '@layouts';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Login, Register, PageNotFound, Welcome, RegistrationSuccess, Profile, Belief } from './containers';

const privateRoutes = [
  {
    id: 'home',
    path: '/',
    component: Welcome
  },
  {
    id: 'belief',
    path: '/:slug/ibelieve/:beliefSlug',
    component: Belief
  }
];

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <NotLoggedInLayout component={Login} path="/login" exact />
        <NotLoggedInLayout component={Register} path="/register" exact />
        <NotLoggedInLayout path="/register/success" component={RegistrationSuccess} exact />
        <PublicLayout path="/404" component={PageNotFound} exact />
        <PublicLayout path="/:slug" component={Profile} exact />
        <PrivateLayout path="/" routes={privateRoutes} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
