import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hobby } from './Hobby';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hobby />, div);
  ReactDOM.unmountComponentAtNode(div);
});
