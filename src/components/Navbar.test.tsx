import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import Navbar from './Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter initialEntries={['/']}><Navbar /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
