import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import rootSaga from './sagas';
import combinedReducer from './ducks';
const RavenMiddleware: any  = require('redux-raven-middleware');

export default (history: History) => {
  const sagaMiddleware = createSagaMiddleware();
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
  let devtools: any = process.env.NODE_ENV !== 'production' && (<any>window).devToolsExtension ? (<any>window).devToolsExtension() : (f: any) => f;
  const store = createStore(
    combinedReducer,
    compose(
      applyMiddleware(sagaMiddleware, ...middlewares),
      devtools,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
