import React from 'react';
import type { FC } from 'react';

interface IProps {
  icon: string;
  title: string;
}
const SectionTitle: FC<IProps> = ({ icon, title }) => (
  <h2 className="mb-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
    <span className="inline-flex items-center gap-2">
      <i className={`fas fa-${icon}`} />
      {title}
    </span>
  </h2>
);

export default SectionTitle;
