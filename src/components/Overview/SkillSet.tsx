import React from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const SkillSet: FC = () => (
  <>
    <SectionTitle {...{ icon: 'trophy', title: 'Skill Set' }} />
    <table className="table-modern w-full overflow-hidden text-left text-sm leading-7 text-slate-700 dark:text-slate-200">
      <tbody>
        <tr>
          <th className="w-40 bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
            Editor
          </th>
          <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">Goland, VSCode, Vim</td>
        </tr>
        <tr>
          <th className="w-40 bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
            Environment
          </th>
          <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">macOS, Ubuntu</td>
        </tr>
        <tr>
          <th className="w-40 bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
            Incumbent
          </th>
          <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">Server side engineer in Kyoto</td>
        </tr>
        <tr>
          <th className="w-40 bg-slate-100/80 px-4 py-3 font-semibold text-slate-900 dark:bg-slate-900/60 dark:text-slate-100">
            Certified
          </th>
          <td className="bg-white/75 px-4 py-3 dark:bg-slate-950/40">
            <a
              className="prose-link"
              href="https://training.linuxfoundation.org/certification/verify/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certified Kubernetes Administrator (2019/06-2022/06)
            </a>
            <br />
            CKA-1900-002255-0100/Tanaka
            <br />
            <a
              className="prose-link"
              href="https://training.linuxfoundation.org/certification/verify/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certified Kubernetes Application Developer (2019/12-2022/12)
            </a>
            <br />
            CKAD-1900-002204-0100/Tanaka
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

export default SkillSet;
