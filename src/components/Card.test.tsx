
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card title="test" body={['test', 'test2']} link="https://8398a7.github.io" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
