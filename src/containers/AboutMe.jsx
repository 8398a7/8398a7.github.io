import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Links from '../components/AboutMe/Links';
import SkillSet from '../components/AboutMe/SkillSet';

class AboutMe extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="col s12">
          <div className="col s6">
            <SkillSet />
          </div>
          <div className="col s6">
            <Links />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(AboutMe);
