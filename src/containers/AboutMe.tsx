import { withRouterReducer } from 'connected-react-router-redux';
import * as React from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'react-twitter-widgets';
import { dispatch } from 'src';
import ActiveProjects from '../components/AboutMe/ActiveProjects';
import Links from '../components/AboutMe/Links';
import SkillSet from '../components/AboutMe/SkillSet';
import { RootState } from '../ducks/index';
import { actions } from '../ducks/meta';

const mapStateToProps = ($$state: RootState) => ({
  meta: $$state.get('$$meta'),
});
type Props = ReturnType<typeof mapStateToProps>;

class AboutMe extends React.PureComponent<Props, {}> {
  public componentWillMount() {
    dispatch(actions.fetchAbilitysheetUsers());
    dispatch(actions.fetchIstUsers());
  }

  public render() {
    const { meta } = this.props;
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
            <ActiveProjects {...{ meta }} />
          </div>
          <div className="col s6">
            <Timeline {...{ dataSource, options }} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouterReducer(
  connect(
    mapStateToProps,
  )(AboutMe)
);
