import * as React from 'react';
import { connect } from 'react-redux';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';

const mapStateToProps = () => ({});
const dispatchToProps = {};

class Hobby extends React.PureComponent<{}, {}> {
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

export default connect<{}, {}, React.ComponentClass<{}>>(mapStateToProps, dispatchToProps)(Hobby);
