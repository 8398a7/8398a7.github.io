import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import SkillSet from './SkillSet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SkillSet />, div);
  unmountComponentAtNode(div);
});
