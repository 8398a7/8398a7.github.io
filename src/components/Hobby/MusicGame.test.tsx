import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MusicGame from './MusicGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MusicGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
