import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './store';
import './main.scss';
import Header from './components/Header';
import Routing from './routing';

const history = createHistory();
const store = createStore(history);

const App = () => (
  <Provider {...{ store }}>
    <ConnectedRouter {...{ history }}>
      <div>
        <Header />
        <div className="container">
          <div className="row center">
            <Routing />
          </div>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
