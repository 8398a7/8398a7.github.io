import React, { useEffect } from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const BlueskyTimeline: FC = () => {
  useEffect(() => {
    void import('bsky-embed/dist/bsky-embed.es.js');
  }, []);

  return (
    <section className="grid gap-5">
      <SectionTitle icon="feather-alt" title="Bluesky Timeline" />
      <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white/74 shadow-[0_24px_58px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/72">
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
    </section>
  );
};

export default BlueskyTimeline;
