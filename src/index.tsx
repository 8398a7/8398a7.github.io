import * as Sentry from '@sentry/react';
import 'bulma/css/bulma.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './store';

const development = import.meta.env.DEV;
const dsn = 'https://3f1e703eea4f457eba7d830e0abb8e09@sentry.iidx.app/3';
Sentry.init({ dsn, environment: import.meta.env.MODE });
ReactGA.initialize('UA-99954359-1', { debug: development });

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
}
