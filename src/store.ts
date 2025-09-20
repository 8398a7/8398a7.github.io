import { configureStore } from '@reduxjs/toolkit';

import { metaReducer, type MetaState } from './features/meta';
import { uiReducer, type UIState } from './features/ui';

const reducer = {
  meta: metaReducer,
  ui: uiReducer,
};

export type PreloadedState = {
  meta?: MetaState;
  ui?: UIState;
};

export const createAppStore = (preloadedState?: PreloadedState) =>
  configureStore({
    reducer,
    preloadedState,
    devTools: import.meta.env.MODE !== 'production',
  });

export const store = createAppStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
