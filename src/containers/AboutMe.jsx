import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AboutMe extends React.PureComponent {
  render() {
    return (
      <div>
        about me
      </div>
    );
  }
}

export default connect(null, null)(AboutMe);
