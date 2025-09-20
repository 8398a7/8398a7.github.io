import React, { useEffect } from 'react';
import type { FC } from 'react';
import ActiveProjects from '../components/Overview/ActiveProjects';
import BlueskyTimeline from '../components/Overview/BlueskyTimeline';
import Links from '../components/Overview/Links';
import SkillSet from '../components/Overview/SkillSet';
import { fetchAbilitysheetUsers, fetchIstUsers } from '../features/meta';
import { useAppDispatch, useAppSelector } from '../hooks';

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
        <BlueskyTimeline />
      </div>
    </div>
  );
};
