import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
// @ts-ignore
import createRavenMiddleware from 'raven-for-redux';
// @ts-ignore
import Raven from 'raven-js';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import createRootReducer, { rootSaga } from './ducks';
import { googleAnalytics } from './lib/reactGAMiddleware';

export default (history: History, dsn: string) => {
  const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
  let middlewares: Middleware[] = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [createLogger()];
  }
  Raven.config(dsn).install();
  const devtools: any =
    process.env.NODE_ENV !== 'production' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f;
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
