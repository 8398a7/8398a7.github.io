
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Meta from '../../models/meta';
import ActiveProjects from './ActiveProjects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActiveProjects meta={new Meta()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
