import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './sagas';
import * as reducers from './ducks';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export default (history) => {
  const combinedReducer = combineReducers({
    ...reducers,
    router: routerReducer,
  });
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [createLogger()];
  }
  const store = createStore(
    combinedReducer,
    compose(
      applyMiddleware(
        sagaMiddleware,
        ...middlewares,
        routerMiddleware(history),
      ),
      (process.env.NODE_ENV !== 'production' && window.devToolsExtension) ?
      window.devToolsExtension() : f => f,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
