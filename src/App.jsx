import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './main.scss';
import Header from './components/Header';
import AboutMe from './containers/AboutMe';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
      </div>
    );
  }
}

export default connect(null, null)(App);
