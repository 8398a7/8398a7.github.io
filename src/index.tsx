import { History } from 'history';
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactGA from 'react-ga';
import { AppContainer } from 'react-hot-loader';
import { Store } from 'redux';
import App, { IAppProps } from './App';
import createStore from './store';

const initialHistory: History = createHistory();
const initialStore: Store<{}> = createStore(initialHistory);

ReactGA.initialize('UA-99954359-1');

initialHistory.listen((location): void => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
});

const render = (
  Component: React.StatelessComponent<IAppProps>,
  store: Store<{}>,
  history: History,
): void => {
  ReactDOM.render(
    <AppContainer>
      <Component {...{ store, history }} />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App, initialStore, initialHistory);
if (module.hot) {
  module.hot.accept('./App', (): void => render(App, initialStore, initialHistory));
}
