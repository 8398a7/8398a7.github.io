import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter initialEntries={['/']}><Header /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
