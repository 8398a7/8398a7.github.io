import { init } from '@sentry/browser';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import 'bulma/css/bulma.css';

import React from 'react';
import { render } from 'react-dom';
import { initialize } from 'react-ga';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import createStore from './store';

const development = process.env.NODE_ENV === 'development';
const dsn = 'https://3f1e703eea4f457eba7d830e0abb8e09@sentry.iidx.app/3';
init({ dsn, environment: process.env.NODE_ENV });
const history = createBrowserHistory();
const store = createStore(history, dsn);

initialize('UA-99954359-1', { debug: development });
render(
  <Provider {...{ store }}>
    <ConnectedRouter {...{ history }}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
