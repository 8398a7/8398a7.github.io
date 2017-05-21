import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import RavenMiddleware from 'redux-raven-middleware';
import rootSaga from './sagas';
import * as reducers from './ducks';

export default (history) => {
  const combinedReducer = combineReducers({
    ...reducers,
    router: routerReducer,
  });
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [];
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
        'https://9239e0e77f8841ef8328aa48a7c33321@sentry.husq.tk/10',
        { release: process.env.GIT_SHA },
      ),
    ];
  }
  const store = createStore(
    combinedReducer,
    compose(
      applyMiddleware(sagaMiddleware, ...middlewares),
      (process.env.NODE_ENV !== 'production' && window.devToolsExtension) ?
      window.devToolsExtension() : f => f,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
