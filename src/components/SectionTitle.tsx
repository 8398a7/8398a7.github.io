import React from 'react';
import type { FC } from 'react';

interface IProps {
  icon: string;
  title: string;
}
const SectionTitle: FC<IProps> = ({ icon, title }) => (
  <div className="mb-5 flex items-center gap-4">
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-base text-white shadow-[0_18px_34px_rgba(15,23,42,0.18)] dark:bg-slate-100 dark:text-slate-950">
      <i className={`fas fa-${icon}`} />
    </span>
    <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{title}</h2>
  </div>
);

export default SectionTitle;
