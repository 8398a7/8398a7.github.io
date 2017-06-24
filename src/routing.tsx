import * as React from 'react';
import { Route, Switch } from 'react-router';
import NoMatch from './components/NoMatch';
import AboutMe from './containers/AboutMe';
import Hobby from './containers/Hobby';

const Routing = (): JSX.Element => (
  <Switch>
    <Route exact={true} path="/" component={AboutMe as React.ComponentClass<any>} />
    <Route exact={true} path="/aboutme" component={AboutMe as React.ComponentClass<any>} />
    <Route exact={true} path="/hobby" component={Hobby as React.ComponentClass<any>} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routing;
