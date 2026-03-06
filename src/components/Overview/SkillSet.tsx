import React from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const skillGroups = [
  { label: 'Editor', value: 'VSCode, Vim' },
  { label: 'Environment', value: 'PVE, Debian, Ansible' },
];

const SkillSet: FC = () => (
  <section className="grid gap-5">
    <SectionTitle {...{ icon: 'trophy', title: 'Skill Set' }} />
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <article
          key={group.label}
          className="rounded-[28px] border border-white/60 bg-white/72 p-5 shadow-[0_22px_52px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/72"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            {group.label}
          </p>
          <p className="mt-3 text-lg font-medium leading-8 text-slate-900 dark:text-slate-100">{group.value}</p>
        </article>
      ))}
      <article className="rounded-[28px] border border-white/60 bg-white/72 p-5 shadow-[0_22px_52px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:col-span-2 dark:border-slate-800 dark:bg-slate-950/72">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Certified
        </p>
        <div className="mt-3 grid gap-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/4 p-4 dark:bg-white/5">
            <a
              className="prose-link text-base font-semibold text-slate-900 dark:text-slate-100"
              href="https://training.linuxfoundation.org/certification/verify/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certified Kubernetes Administrator
            </a>
            <p>2019/06-2022/06</p>
            <p>CKA-1900-002255-0100/Tanaka</p>
          </div>
          <div className="rounded-2xl bg-slate-950/4 p-4 dark:bg-white/5">
            <a
              className="prose-link text-base font-semibold text-slate-900 dark:text-slate-100"
              href="https://training.linuxfoundation.org/certification/verify/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certified Kubernetes Application Developer
            </a>
            <p>2019/12-2022/12</p>
            <p>CKAD-1900-002204-0100/Tanaka</p>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default SkillSet;
