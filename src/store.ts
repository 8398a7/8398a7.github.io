import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import type { Middleware, StoreEnhancer } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createRootReducer, { rootSaga } from './ducks';

type ReduxDevToolsExtension = () => StoreEnhancer;

type ExtendedWindow = Window &
  typeof globalThis & {
    __REDUX_DEVTOOLS_EXTENSION__?: ReduxDevToolsExtension;
  };

const identityEnhancer: StoreEnhancer = (next) => next;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];

  if (import.meta.env.MODE !== 'production') {
    middlewares.push(createLogger());
  }

  const devtoolsExtension = (window as ExtendedWindow).__REDUX_DEVTOOLS_EXTENSION__;
  const devtools = import.meta.env.MODE !== 'production' && devtoolsExtension ? devtoolsExtension() : identityEnhancer;

  const store = createStore(
    createRootReducer(),
    compose(
      applyMiddleware(...middlewares),
      devtools,
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
