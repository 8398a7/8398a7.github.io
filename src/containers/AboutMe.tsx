import * as React from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'react-twitter-widgets';
import { Dispatch } from 'redux';
import ActiveProjects from '../components/AboutMe/ActiveProjects';
import Links from '../components/AboutMe/Links';
import SkillSet from '../components/AboutMe/SkillSet';
import { RootState } from '../ducks/index';
import { actions } from '../ducks/meta';
import Meta from '../models/meta';

class AboutMe extends React.PureComponent<Props, {}> {
  public componentWillMount() {
    this.props.dispatch(actions.fetchAbilitysheetUsers());
    this.props.dispatch(actions.fetchIstUsers());
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

interface IMapStateToProps {
  meta: Meta;
}

const mapStateToProps = ($$state: RootState): IMapStateToProps => ({
  meta: $$state.get('$$meta'),
});

interface IDispatchToProps {
  dispatch: Dispatch;
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    dispatch,
  }
};

type Props = IMapStateToProps & IDispatchToProps;

export default connect<IMapStateToProps, IDispatchToProps, React.ComponentClass<Props>>(
  mapStateToProps,
  mapDispatchToProps,
)(AboutMe);
