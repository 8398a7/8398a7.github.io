import * as React from 'react';
import { compose, lifecycle } from 'recompose';
import 'video-react/dist/video-react.css';
import { dispatch } from '../';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';
import updateLocation from '../lib/updateLocation';

export const Hobby: React.SFC<{}> = () => (
  <div>
    <div className="col s12">
      <Gymkhana />
      <MusicGame />
    </div>
  </div>
);

export default compose(
  lifecycle({
    componentDidMount() {
      dispatch(updateLocation());
    }
  }),
)(Hobby);
