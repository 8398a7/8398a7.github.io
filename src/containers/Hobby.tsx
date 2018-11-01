import { withRouterReducer } from 'connected-react-router-redux';
import * as React from 'react';
import 'video-react/dist/video-react.css';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';

class Hobby extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div>
        <div className="col s12">
          <Gymkhana />
          <MusicGame />
        </div>
      </div>
    );
  }
}

export default withRouterReducer((Hobby));
