import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Hobby extends React.PureComponent {
  render() {
    return (
      <div>
        hobby
      </div>
    );
  }
}

export default connect(null, null)(Hobby);
