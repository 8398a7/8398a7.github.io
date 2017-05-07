import React from 'react';
import { Route, Switch } from 'react-router';
import AboutMe from './containers/AboutMe';
import Hobby from './containers/Hobby';
import NoMatch from './components/NoMatch';

const Routing = () => (
  <Switch>
    <Route exact path="/" component={AboutMe} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/hobby" component={Hobby} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routing;
