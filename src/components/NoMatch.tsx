import React from 'react';
import type { FC } from 'react';

const NoMatch: FC = () => (
  <section className="rounded-[28px] border border-[var(--surface-border)] bg-[var(--surface)] px-6 py-16 text-center shadow-[var(--card-shadow)] backdrop-blur-xl">
    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">404 not found</h2>
  </section>
);

export default NoMatch;
