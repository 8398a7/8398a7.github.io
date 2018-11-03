import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SectionTitle from './SectionTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SectionTitle icon="info" title="AboutMe" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
