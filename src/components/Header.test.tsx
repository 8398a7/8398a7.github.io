import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { MemoryRouter } from 'react-router';
import Header from './Header';
import ui from '../ducks/UI';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(
    combineReducers({
      ui,
    }),
  );
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    </Provider>,
    div,
  );
  unmountComponentAtNode(div);
});
