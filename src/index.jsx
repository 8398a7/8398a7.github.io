import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './store';
import './main.scss';
import Header from './components/Header';
import AboutMe from './containers/AboutMe';
import Hobby from './containers/Hobby';

const history = createHistory();
const store = createStore(history);
render(
  <Provider {...{ store }}>
    <ConnectedRouter {...{history}}>
      <div>
        <Header />
        <div className="container">
          <div className="row center">
            <Route exact path='/' component={AboutMe} />
            <Route exact path='/aboutme' component={AboutMe} />
            <Route exact path='/hobby' component={Hobby} />
          </div>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
