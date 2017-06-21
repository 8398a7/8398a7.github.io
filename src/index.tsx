import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { History } from 'history';
import createHistory from 'history/createBrowserHistory';
import * as ReactGA from 'react-ga';
import createStore from './store';
import App, { TAppProps } from './App';
import { Store } from 'redux';

const history: History = createHistory();
const store: Store<{}> = createStore(history);

ReactGA.initialize('UA-99954359-1');

history.listen((location): void => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
});

const render = (Component: React.StatelessComponent<TAppProps>, store: Store<{}>, history: History): void => {
  ReactDOM.render(
    <AppContainer>
      <Component {...{ store, history }} />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App, store, history);
if (module.hot) module.hot.accept('./App', (): void => render(App, store, history));