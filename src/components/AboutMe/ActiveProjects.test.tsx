import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Meta from '../../models/meta';
import ActiveProjects from './ActiveProjects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ActiveProjects meta={new Meta()} />, div);
  unmountComponentAtNode(div);
});
