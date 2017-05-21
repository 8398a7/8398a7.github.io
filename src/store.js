import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
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
