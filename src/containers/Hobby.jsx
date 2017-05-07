import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';

class Hobby extends React.PureComponent {
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

export default connect(null, null)(Hobby);
