import * as React from 'react';
import { returntypeof } from 'react-redux-typescript';
import { connect } from 'react-redux';
import { actionCreators } from '../ducks/iidx12';
import Links from '../components/AboutMe/Links';
import SkillSet from '../components/AboutMe/SkillSet';
import ActiveProjects from '../components/AboutMe/ActiveProjects';
const Timeline: any = require('react-twitter-widgets').Timeline;

const mapStateToProps = ($$state: any) => ({
  users: $$state.get('$$iidx12State').users,
});

const dispatchToProps = {
  fetchIidx12Users: actionCreators.fetchIidx12Users,
};

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;

class AboutMe extends React.PureComponent<Props, {}> {
  componentWillMount() {
    this.props.fetchIidx12Users();
  }

  render() {
    const { users } = this.props;
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
            <ActiveProjects {...{ users }} />
          </div>
          <div className="col s6">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: '8398a7',
              }}
              options={{
                username: '8398a7',
                height: '800',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(AboutMe);
