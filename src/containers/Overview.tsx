import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Timeline } from 'react-twitter-widgets';
import ActiveProjects from '../components/Overview/ActiveProjects';
import Links from '../components/Overview/Links';
import SkillSet from '../components/Overview/SkillSet';
import { RootState } from '../ducks';
import { actions } from '../ducks/meta';

const dataSource = {
  screenName: '8398a7',
  sourceType: 'profile',
};
const options = {
  height: '800',
  username: '8398a7',
};
export const Overview: React.SFC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchAbilitysheetUsers());
    dispatch(actions.fetchIstUsers());
  });
  const meta = useSelector((state: RootState) => state.meta);

  return (
    <>
      <div className="columns">
        <div className="column">
          <SkillSet />
          <ActiveProjects {...{ meta }} />
        </div>
        <div className="column">
          <Links />
          <Timeline {...{ dataSource, options }} />
        </div>
      </div>
    </>
  );
};
