import React from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const Gymkhana: FC = () => (
  <section className="grid gap-6">
    <SectionTitle {...{ icon: 'motorcycle', title: 'Gymkhana(2010 - 2012, 2023-)' }} />
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-6">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wmwIFR_nJbE?si=Kq6OXi1Yuzkh7xtn"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          />
        </div>
        <table className="table-modern w-full text-left text-sm leading-7 text-slate-700 dark:text-slate-200">
          <tbody>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                2010 愛媛DUNLOP杯#スペシャルN
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">2010/04/25</td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">21/30 (121.14%) (first run)</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                2011 愛媛DUNLOP杯#スペシャルN
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">2011/04/24</td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">1/26 (100.0%)</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                2011 DUNLOP杯#JAPAN
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">2011/10/09</td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">65/190 (108.91%)</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                2011 近畿DUNLOP杯#2
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">2011/12/11</td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">4/42 (102.53%)</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                2025 JAGE杯#4
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">2025/11/09</td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">34/143 (106.87%)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid gap-6">
        <table className="table-modern w-full text-left text-sm leading-7 text-slate-700 dark:text-slate-200">
          <thead>
            <tr>
              <th className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                Group
              </th>
              <th className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                License
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">JAGE</td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">C1</td>
            </tr>
          </tbody>
        </table>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fPdtiItuGok?si=6J8q41A8nQz31fcf"
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
