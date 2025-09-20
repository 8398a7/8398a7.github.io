import React, { useEffect } from 'react';
import type { FC } from 'react';
import { Timeline } from 'react-twitter-widgets';
import ActiveProjects from '../components/Overview/ActiveProjects';
import Links from '../components/Overview/Links';
import SkillSet from '../components/Overview/SkillSet';
import { fetchAbilitysheetUsers, fetchIstUsers } from '../features/meta';
import { useAppDispatch, useAppSelector } from '../hooks';

const dataSource = {
  screenName: '8398a7',
  sourceType: 'profile',
};
const options = {
  height: '800',
  username: '8398a7',
};
export const Overview: FC = () => {
  const dispatch = useAppDispatch();
  const abilitysheetStatus = useAppSelector((state) => state.meta.abilitysheet.status);
  const istStatus = useAppSelector((state) => state.meta.ist.status);
  const meta = useAppSelector((state) => state.meta);

  useEffect(() => {
    if (abilitysheetStatus === 'idle') {
      dispatch(fetchAbilitysheetUsers());
    }
  }, [abilitysheetStatus, dispatch]);

  useEffect(() => {
    if (istStatus === 'idle') {
      dispatch(fetchIstUsers());
    }
  }, [dispatch, istStatus]);

  return (
    <div className="columns">
      <div className="column">
        <SkillSet />
        <ActiveProjects abilitysheet={meta.abilitysheet} ist={meta.ist} />
      </div>
      <div className="column">
        <Links />
        <Timeline {...{ dataSource, options }} />
      </div>
    </div>
  );
};
