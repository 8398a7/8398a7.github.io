import React, { SFC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import { Overview } from './containers/Overview';
import Hobby from './containers/Hobby';

const Routing: SFC<{}> = () => (
  <>
    <Header />
    <section className="section">
      <div className="container">
        <Switch>
          <Route exact={true} path="/" component={Overview} />
          <Route exact={true} path="/overview" component={Overview} />
          <Route exact={true} path="/hobby" component={Hobby} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      <Footer />
    </section>
  </>
);

export default Routing;
