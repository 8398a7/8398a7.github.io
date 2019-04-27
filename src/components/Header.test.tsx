import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MemoryRouter initialEntries={['/']}><Header /></MemoryRouter>, div);
  unmountComponentAtNode(div);
});
