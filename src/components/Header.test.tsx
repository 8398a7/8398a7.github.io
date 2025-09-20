import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';
import { createAppStore } from '../store';
import renderWithRoot from '../test/render';

it('renders without crashing', () => {
  const store = createAppStore();
  const { unmount } = renderWithRoot(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    </Provider>,
  );

  unmount();
});
