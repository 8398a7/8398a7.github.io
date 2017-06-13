import * as React from 'react';
import { returntypeof } from 'react-redux-typescript';
import { connect } from 'react-redux';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';

const mapStateToProps = () => ({});
const dispatchToProps = {};
const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;

class Hobby extends React.PureComponent<Props, {}> {
  render() {
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

export default connect(mapStateToProps, dispatchToProps)(Hobby);
