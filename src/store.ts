import { routerMiddleware } from 'connected-react-router';
import type { History } from 'history';
import createRavenMiddleware from 'raven-for-redux';
import Raven from 'raven-js';
import { applyMiddleware, compose, createStore } from 'redux';
import type { Middleware, StoreEnhancer } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createRootReducer, { rootSaga } from './ducks';
import { googleAnalytics } from './lib/reactGAMiddleware';

type ReduxDevToolsExtension = () => StoreEnhancer;

type ExtendedWindow = Window &
  typeof globalThis & {
    __REDUX_DEVTOOLS_EXTENSION__?: ReduxDevToolsExtension;
  };

const identityEnhancer: StoreEnhancer = (next) => next;

export default (history: History, dsn: string) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  Raven.config(dsn).install();

  const devtoolsExtension = (window as ExtendedWindow).__REDUX_DEVTOOLS_EXTENSION__;
  const devtools = process.env.NODE_ENV !== 'production' && devtoolsExtension ? devtoolsExtension() : identityEnhancer;

  const store = createStore(
    createRootReducer(history),
    compose(
      applyMiddleware(
        routerMiddleware(history),
        googleAnalytics,
        sagaMiddleware,
        createRavenMiddleware(Raven, {}),
        ...middlewares,
      ),
      devtools,
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
