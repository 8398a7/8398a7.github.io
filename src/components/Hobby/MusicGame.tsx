import React from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const bmsStats = [
  { label: 'bms', value: '★8' },
  { label: 'recommend', value: '★20.16' },
  { label: 'style', value: 'SP/2P/対象固定+3:5' },
  { label: 'start', value: '13/06/01' },
];

const iidxStats = [
  { label: 'iidx', value: '☆☆' },
  { label: 'author: sp12.iidx.app', value: '14/11/11', href: 'https://sp12.iidx.app', linkLabel: 'sp12.iidx.app' },
  { label: 'author: IST', value: '18/01/20', href: 'https://score.iidx.app', linkLabel: 'IST' },
  { label: 'remain (2018)', value: '灼熱/ICARUS†/Mare/X-DEN' },
  { label: 'start', value: 'Lincle' },
];

const MusicGame: FC = () => (
  <section className="grid gap-6">
    <SectionTitle {...{ icon: 'gamepad', title: 'Music Game(2013 - )' }} />
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)]">
      <div className="grid gap-6">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t4FFqzzdYfw"
            title="恋の2-4-11(BMS Edit)"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            frameBorder="0"
          />
        </div>
        <article className="rounded-[32px] border border-white/60 bg-white/74 p-6 shadow-[0_24px_58px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/72">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
            BMS Snapshot
          </p>
          <dl className="mt-4 grid gap-3">
            {bmsStats.map((stat) => (
              <div
                key={stat.label}
                className="grid gap-1 rounded-2xl bg-slate-950/4 px-4 py-3 dark:bg-white/5 sm:grid-cols-[140px_minmax(0,1fr)] sm:items-center"
              >
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {stat.label}
                </dt>
                <dd className="text-sm font-medium text-slate-900 dark:text-slate-100">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
      <div className="grid gap-6">
        <article className="rounded-[32px] border border-white/60 bg-white/74 p-6 shadow-[0_24px_58px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/72">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
            IIDX Snapshot
          </p>
          <dl className="mt-4 grid gap-3">
            {iidxStats.map((stat) => (
              <div
                key={`${stat.label}-${stat.value}`}
                className="grid gap-1 rounded-2xl bg-slate-950/4 px-4 py-3 dark:bg-white/5 sm:grid-cols-[190px_minmax(0,1fr)] sm:items-center"
              >
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                  {stat.href && stat.linkLabel ? (
                    <>
                      {stat.label.split(':')[0]}:{' '}
                      <a className="prose-link" href={stat.href}>
                        {stat.linkLabel}
                      </a>
                    </>
                  ) : (
                    stat.label
                  )}
                </dt>
                <dd className="text-sm font-medium text-slate-900 dark:text-slate-100">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UCnxzozbTPg?si=a4tRrxMrJsGft353"
            title="★19 conflict 難"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  </section>
);

export default MusicGame;
