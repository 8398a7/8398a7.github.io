import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Gymkhana from './Gymkhana';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Gymkhana />, div);
  unmountComponentAtNode(div);
});
