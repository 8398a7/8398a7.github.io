import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import NoMatch from './NoMatch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<NoMatch />, div);
  unmountComponentAtNode(div);
});
