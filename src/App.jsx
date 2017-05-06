import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './components/Header';
import './main.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        hello world!
      </div>
    );
  }
}

export default connect(null, null)(App);
