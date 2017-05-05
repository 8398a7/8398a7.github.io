import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './sagas';
import * as reducers from './ducks';

export default () => {
  const combinedReducer = combineReducers(reducers);
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
      ),
      (process.env.NODE_ENV !== 'production' && window.devToolsExtension) ?
      window.devToolsExtension() : f => f,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
