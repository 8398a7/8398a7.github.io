import * as React from 'react';
import { ConnectedComponentClass } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import AboutMe, { AboutMeProps } from './containers/AboutMe';
import Hobby from './containers/Hobby';

const Routing: React.StatelessComponent<{}> = () => (
  <Router>
    <div>
      <Header />
      <div className="container">
        <div className="row center">
          <Switch>
            <Route exact={true} path="/" component={AboutMe as ConnectedComponentClass<React.ComponentClass<AboutMeProps, {}>, {}>} />
            <Route exact={true} path="/aboutme" component={AboutMe as ConnectedComponentClass<React.ComponentClass<AboutMeProps, {}>, {}>} />
            <Route exact={true} path="/hobby" component={Hobby as React.ComponentClass<{}>} />
            <Route component={NoMatch as React.StatelessComponent<{}>} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default Routing;
