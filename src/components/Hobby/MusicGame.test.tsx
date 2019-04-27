import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import MusicGame from './MusicGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MusicGame />, div);
  unmountComponentAtNode(div);
});
