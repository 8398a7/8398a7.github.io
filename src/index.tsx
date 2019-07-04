import { init } from '@sentry/browser';
// @ts-ignore
import { ConnectedRouter } from 'connected-react-router/immutable';
import 'font-awesome/css/font-awesome.css';
import { createBrowserHistory } from 'history';
import 'materialize-css/dist/css/materialize.css';
import React from 'react';
import { render } from 'react-dom';
import { initialize } from 'react-ga';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';

const development = process.env.NODE_ENV === 'development';
const dsn = development
  ? 'https://38e6fdf890e44bee87d3f3c50e4512e8@sentry.husq.tk/22'
  : 'https://f6b6f48a3202490b87056bd987375bd3@sentry.husq.tk/11';
init({ dsn });
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
registerServiceWorker();
