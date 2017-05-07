import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Timeline } from 'react-twitter-widgets';
import { actions } from '../ducks/iidx12';
import Links from '../components/AboutMe/Links';
import SkillSet from '../components/AboutMe/SkillSet';

class AboutMe extends React.PureComponent {
  componentWillMount() {
    this.props.fetchIidx12Users();
  }

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
          <div className="col s6">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: '8398a7',
              }}
              options={{
                username: '8398a7',
                height: '400',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(AboutMe);
