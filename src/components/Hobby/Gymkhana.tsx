import React from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const gymkhanaResults = [
  { title: '2010 愛媛DUNLOP杯#スペシャルN', date: '2010/04/25', result: '21/30 (121.14%) (first run)' },
  { title: '2011 愛媛DUNLOP杯#スペシャルN', date: '2011/04/24', result: '1/26 (100.0%)' },
  { title: '2011 DUNLOP杯#JAPAN', date: '2011/10/09', result: '65/190 (108.91%)' },
  { title: '2011 近畿DUNLOP杯#2', date: '2011/12/11', result: '4/42 (102.53%)' },
  { title: '2026 DUNLOP杯#1', date: '2026/03/22', result: '25/110 (106.17%)' },
  { title: '2026 DUNLOP杯#2', date: '2026/04/26', result: '17/97 (104.59%)' },
];

const Gymkhana: FC = () => (
  <section className="grid gap-6">
    <SectionTitle {...{ icon: 'motorcycle', title: 'Gymkhana(2010 - 2012, 2023-)' }} />
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.92fr)]">
      <div className="grid gap-6">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dYRt51uSK-8?si=JQDBR7iWPnPPyw79"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          />
        </div>
        <article className="rounded-[32px] border border-white/60 bg-white/74 p-6 shadow-[0_24px_58px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/72">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
            Result Archive
          </p>
          <div className="mt-4 grid gap-3">
            {gymkhanaResults.map((result) => (
              <article
                key={result.title}
                className="rounded-[22px] bg-slate-950/4 px-4 py-4 dark:bg-white/5 sm:grid sm:grid-cols-[minmax(0,1fr)_120px] sm:gap-4"
              >
                <div className="grid gap-1">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{result.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{result.result}</p>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:mt-0 sm:text-right dark:text-slate-400">
                  {result.date}
                </p>
              </article>
            ))}
          </div>
        </article>
      </div>
      <div className="grid gap-6">
        <article className="rounded-[32px] border border-white/60 bg-white/74 p-6 shadow-[0_24px_58px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/72">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
            License
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] bg-slate-950/4 px-4 py-4 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Group</p>
              <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">JAGE</p>
            </div>
            <div className="rounded-[22px] bg-slate-950/4 px-4 py-4 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">License</p>
              <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">B</p>
            </div>
          </div>
        </article>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kVU7eegjHY8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Gymkhana;
