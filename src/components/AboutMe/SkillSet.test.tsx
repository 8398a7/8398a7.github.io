import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SkillSet from './SkillSet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillSet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
