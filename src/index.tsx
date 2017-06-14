import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import * as ReactGA from 'react-ga';
import createStore from './store';
import App from './App';

const history = createHistory();
const store = createStore(history);

ReactGA.initialize('UA-99954359-1');

history.listen((location) => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
});

const render = (Component: typeof App, store: any, history: any) => {
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
    const NextApp: typeof App = require('./App').default;
    render(NextApp, store, history);
  });
}