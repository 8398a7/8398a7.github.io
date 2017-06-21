import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { History } from 'history';
import createHistory from 'history/createBrowserHistory';
import * as ReactGA from 'react-ga';
import createStore from './store';
import App from './App';

const history: History = createHistory();
const store = createStore(history);

ReactGA.initialize('UA-99954359-1');

history.listen((location) => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
});

const render = (Component: typeof App, store: any, history: History) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...{ store, history }} />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App, store, history);
if (module.hot) module.hot.accept('./App', () => render(App, store, history));