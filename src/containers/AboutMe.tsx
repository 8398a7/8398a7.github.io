import * as React from 'react';
import { connect } from 'react-redux';
import ActiveProjects from '../components/AboutMe/ActiveProjects';
import Links from '../components/AboutMe/Links';
import SkillSet from '../components/AboutMe/SkillSet';
import { actionCreators } from '../ducks/iidx12';
import { RootState } from '../ducks/index';
const Timeline: any = require('react-twitter-widgets').Timeline;

interface ImapStateToProps {
  users: number;
}

const mapStateToProps = ($$state: RootState): ImapStateToProps => ({
  users: $$state.get('$$iidx12State').users,
});

interface IdispatchToProps {
  fetchIidx12Users: () => void;
}

const dispatchToProps = {
  fetchIidx12Users: actionCreators.fetchIidx12Users,
};

type Props = ImapStateToProps & IdispatchToProps;

class AboutMe extends React.PureComponent<Props, {}> {
  public componentWillMount() {
    this.props.fetchIidx12Users();
  }

  public render() {
    const { users } = this.props;
    const dataSource = {
      screenName: '8398a7',
      sourceType: 'profile',
    };
    const options = {
      height: '800',
      username: '8398a7',
    };
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
            <Timeline {...{ dataSource, options }} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect<ImapStateToProps, IdispatchToProps, React.ComponentClass<Props>>(
  mapStateToProps,
  dispatchToProps,
)(AboutMe);
