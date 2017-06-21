import * as React from 'react';
import { Route, Switch } from 'react-router';
import AboutMe from './containers/AboutMe';
import Hobby from './containers/Hobby';
import NoMatch from './components/NoMatch';

const Routing = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={AboutMe as React.ComponentClass<any>} />
    <Route exact path="/aboutme" component={AboutMe as React.ComponentClass<any>} />
    <Route exact path="/hobby" component={Hobby as React.ComponentClass<any>} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routing;
