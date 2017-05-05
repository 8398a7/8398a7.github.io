import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createStore from './store';

import App from './App';

const store = createStore();

render(
  <Provider {...{ store }}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
