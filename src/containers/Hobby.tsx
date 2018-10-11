import * as React from 'react';
import { connect } from 'react-redux';
import 'video-react/dist/video-react.css';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';
import { withRouterReducer } from '../lib/withRouterReducer';

const mapStateToProps = () => ({});
const dispatchToProps = {};

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

export default withRouterReducer(
  connect<{}, {}, React.ComponentClass<{}>>(
    mapStateToProps,
    dispatchToProps,
  )(Hobby)
);
