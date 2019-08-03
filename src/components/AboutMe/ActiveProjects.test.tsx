import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ActiveProjects from './ActiveProjects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ActiveProjects meta={{ abilitysheet: 0, ist: 0 }} />, div);
  unmountComponentAtNode(div);
});
