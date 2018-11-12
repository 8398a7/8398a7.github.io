import * as React from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'react-twitter-widgets';
import { compose, lifecycle, pure } from 'recompose';
import updateLocation from 'src/lib/updateLocation';
import { dispatch } from '../';
import ActiveProjects from '../components/AboutMe/ActiveProjects';
import Links from '../components/AboutMe/Links';
import SkillSet from '../components/AboutMe/SkillSet';
import { RootState } from '../ducks/index';
import { actions } from '../ducks/meta';
import Meta from '../models/meta';

const mapStateToProps = ($$state: RootState) => ({
  meta: $$state.get('$$meta', new Meta()),
});
type Props = ReturnType<typeof mapStateToProps>;

const dataSource = {
  screenName: '8398a7',
  sourceType: 'profile',
};
const options = {
  height: '800',
  username: '8398a7',
};
const AboutMe: React.SFC<Props> = (props) => (
  <div>
    <div className="col s12">
      <div className="col s6">
        <SkillSet />
      </div>
      <div className="col s6">
        <Links />
      </div>
      <div className="col s6">
        <ActiveProjects {...{ meta: props.meta }} />
      </div>
      <div className="col s6">
        <Timeline {...{ dataSource, options }} />
      </div>
    </div>
  </div>
);

export default compose(
  lifecycle({
    componentWillMount() {
      dispatch(actions.fetchAbilitysheetUsers());
      dispatch(actions.fetchIstUsers());
    },
    componentDidMount() {
      dispatch(updateLocation());
    }
  }),
  pure,
  connect(mapStateToProps),
)(AboutMe);
