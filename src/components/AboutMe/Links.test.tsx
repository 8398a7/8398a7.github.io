
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Links from './Links';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Links />, div);
  ReactDOM.unmountComponentAtNode(div);
});
