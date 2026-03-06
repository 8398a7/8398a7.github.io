import React from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const MusicGame: FC = () => (
  <section className="grid gap-6">
    <SectionTitle {...{ icon: 'gamepad', title: 'Music Game(2013 - )' }} />
    <div className="grid gap-6 lg:grid-cols-2">
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
        <table className="table-modern w-full text-left text-sm leading-7 text-slate-700 dark:text-slate-200">
          <tbody>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                bms
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">★8</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                recommend
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">★20.16</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                style
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">SP/2P/対象固定+3:5</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                start
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">13/06/01</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid gap-6">
        <table className="table-modern w-full text-left text-sm leading-7 text-slate-700 dark:text-slate-200">
          <tbody>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                iidx
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">☆☆</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                author: <a href="https://sp12.iidx.app">sp12.iidx.app</a>
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">14/11/11</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                author: <a href="https://score.iidx.app">IST</a>
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">18/01/20</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                remain (2018)
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">灼熱/ICARUS†/Mare/X-DEN</td>
            </tr>
            <tr>
              <td className="bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
                start
              </td>
              <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">Lincle</td>
            </tr>
          </tbody>
        </table>
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
