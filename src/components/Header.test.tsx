import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import ui from '../ducks/UI';
import renderWithRoot from '../test/render';

it('renders without crashing', () => {
  const store = createStore(
    combineReducers({
      ui,
    }),
  );
  const { unmount } = renderWithRoot(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    </Provider>,
  );

  unmount();
});
