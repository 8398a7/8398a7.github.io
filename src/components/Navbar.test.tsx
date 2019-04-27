import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router';
import Navbar from './Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MemoryRouter initialEntries={['/']}><Navbar /></MemoryRouter>, div);
  unmountComponentAtNode(div);
});
