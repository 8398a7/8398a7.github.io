
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Gymkhana from './Gymkhana';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gymkhana />, div);
  ReactDOM.unmountComponentAtNode(div);
});
