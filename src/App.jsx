import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  render() {
    return (
      <div>
        hello world!
      </div>
    );
  }
}

export default connect(null, null)(App);
