import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import AboutMe from './containers/AboutMe';
import Hobby from './containers/Hobby';

const Routing: React.StatelessComponent<{}> = () => (
  <Router>
    <div>
      <Header />
      <div className="container">
        <div className="row center">
          <Switch>
            <Route exact={true} path="/" component={AboutMe} />
            <Route exact={true} path="/aboutme" component={AboutMe} />
            <Route exact={true} path="/hobby" component={Hobby} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default Routing;
