import React from 'react';

const SkillSet = () => (
  <div>
    <h2 className="header indigo-text lighten-1 section-title">
      <span>
        <i className="fa fa-info" />
        About Me
      </span>
    </h2>
    <table className="striped">
      <tbody>
        <tr>
          <th>Editor</th>
          <td>neovim</td>
        </tr>
        <tr>
          <th>Environment</th>
          <td>OSX, Ubuntu</td>
        </tr>
        <tr>
          <th>Recently</th>
          <td>AWS, RonR, Chef, Docker, Redux, Spring Boot</td>
        </tr>
        <tr>
          <th>Incumbent</th>
          <td>Server side engineer in Kyoto</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default SkillSet;
