import { withRouterReducer } from 'connected-react-router-redux';
import * as React from 'react';
import { compose } from 'recompose';
import 'video-react/dist/video-react.css';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';

export const Hobby: React.SFC<{}> = () => (
  <div>
    <div className="col s12">
      <Gymkhana />
      <MusicGame />
    </div>
  </div>
);

export default compose(
  withRouterReducer,
)(Hobby);
