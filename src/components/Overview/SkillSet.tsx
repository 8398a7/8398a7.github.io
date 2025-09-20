import React from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const SkillSet: FC = () => (
  <>
    <SectionTitle {...{ icon: 'trophy', title: 'Skill Set' }} />
    <table className="table is-striped is-hoverable is-fullwidth table-modern">
      <tbody>
        <tr>
          <th>Editor</th>
          <td>Goland, VSCode, Vim</td>
        </tr>
        <tr>
          <th>Environment</th>
          <td>macOS, Ubuntu</td>
        </tr>
        <tr>
          <th>Incumbent</th>
          <td>Server side engineer in Kyoto</td>
        </tr>
        <tr>
          <th>Certified</th>
          <td>
            <a
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
