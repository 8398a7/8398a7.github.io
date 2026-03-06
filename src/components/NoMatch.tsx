import React from 'react';
import type { FC } from 'react';

const NoMatch: FC = () => (
  <section className="overflow-hidden rounded-[36px] border border-white/60 bg-white/70 px-6 py-16 text-center shadow-[0_28px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
    <div className="mx-auto grid max-w-xl gap-4">
      <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white dark:bg-slate-100 dark:text-slate-950">
        404
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">Page not found</h2>
      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
        指定されたページは存在しないか、移動された可能性があります。
      </p>
    </div>
  </section>
);

export default NoMatch;
