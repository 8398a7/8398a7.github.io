import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Timeline } from 'react-twitter-widgets';
import ActiveProjects from '../components/AboutMe/ActiveProjects';
import Links from '../components/AboutMe/Links';
import SkillSet from '../components/AboutMe/SkillSet';
import { RootState } from '../ducks';
import { actions } from '../ducks/meta';

const mapStateToProps = ($$state: RootState) => ({
  meta: $$state.$$meta
});
type Props = ReturnType<typeof mapStateToProps>;

const dataSource = {
  screenName: '8398a7',
  sourceType: 'profile'
};
const options = {
  height: '800',
  username: '8398a7'
};
const AboutMe = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchAbilitysheetUsers());
    dispatch(actions.fetchIstUsers());
  });
  return (
    <>
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
    </>
  );
};

export default connect(mapStateToProps)(AboutMe);
