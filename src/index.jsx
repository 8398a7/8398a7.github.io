import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import createStore from './store';
import App from './App';

const history = createHistory();
const store = createStore(history);

const render = (Component, store, history) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...{ store, history }} />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App, store, history);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp, store, history);
  });
}
