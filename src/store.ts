import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import combinedReducer from './ducks';
import rootSaga from './sagas';
const RavenMiddleware: any  = require('redux-raven-middleware');

export default (history: History) => {
  const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
  let middlewares: any[] = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [
      createLogger({
        collapsed: true,
        stateTransformer: state => state.toJS(),
      }),
      routerMiddleware(history),
    ];
  }
  if (process.env.NODE_ENV === 'production') {
    middlewares = [
      RavenMiddleware(
        'https://f6b6f48a3202490b87056bd987375bd3@sentry.husq.tk/11',
        { release: process.env.GIT_SHA },
      ),
    ];
  }
  const devtools: any = process.env.NODE_ENV !== 'production' && (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f;
  const store: Store<{}> = createStore(
    combinedReducer,
    compose(
      applyMiddleware(sagaMiddleware, ...middlewares),
      devtools,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
