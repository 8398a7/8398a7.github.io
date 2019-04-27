import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import SectionTitle from './SectionTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SectionTitle icon="info" title="AboutMe" />, div);
  unmountComponentAtNode(div);
});
