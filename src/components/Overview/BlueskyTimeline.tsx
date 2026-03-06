import React, { useEffect } from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const BlueskyTimeline: FC = () => {
  useEffect(() => {
    void import('bsky-embed/dist/bsky-embed.es.js');
  }, []);

  return (
    <>
      <SectionTitle icon="feather-alt" title="Bluesky Timeline" />
      <div className="overflow-hidden rounded-[clamp(18px,1.5vw+12px,30px)] border border-[var(--surface-border)] bg-[var(--surface)] shadow-[var(--card-shadow)] backdrop-blur-xl">
        <div className="p-6 sm:p-7">
          <bsky-embed
            username="839.bsky.social"
            limit="5"
            load-more="true"
            link-target="_blank"
            style={{ display: 'block', width: '100%' }}
          />
        </div>
      </div>
    </>
  );
};

export default BlueskyTimeline;
