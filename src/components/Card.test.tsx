import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Card title="test" body={['test', 'test2']} link="https://8398a7.github.io" />, div);
  unmountComponentAtNode(div);
});
