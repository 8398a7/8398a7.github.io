import React, { SFC } from 'react';
import SectionTitle from '../SectionTitle';

const SkillSet: SFC<{}> = () => (
  <>
    <SectionTitle {...{ icon: 'info', title: 'AboutMe' }} />
    <table className="striped">
      <tbody>
        <tr>
          <th>Editor</th>
          <td>vscode, vim</td>
        </tr>
        <tr>
          <th>Environment</th>
          <td>OSX, Ubuntu Desktop</td>
        </tr>
        <tr>
          <th>Recently</th>
          <td>AWS, Rails, Chef, Docker, TypeScript, Redux, Spring Boot</td>
        </tr>
        <tr>
          <th>Incumbent</th>
          <td>Server side engineer in Kyoto</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default SkillSet;
