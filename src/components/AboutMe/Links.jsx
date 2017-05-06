import React from 'react';
import gh from '../../images/gh.png';
import twitter from '../../images/twitter.png';
import wantedly from '../../images/wantedly.png';
import './Links.scss';

const Links = () => (
  <div>
    <h2 className="header indigo-text lighten-1 section-title">
      <span>
        <i className="fa fa-connectdevelop" />
        Link
      </span>
    </h2>
    <ul className="collection">
      <li className="collection-item avatar">
        <img src={gh} alt="" className="circle" />
        <span className="title">GitHub</span>
        <p>
          <a target="_blank" rel="noopener" href="https://github.com/8398a7">
            https://github.com/8398a7
          </a>
        </p>
      </li>
      <li className="collection-item avatar">
        <img src={twitter} alt="" className="circle" />
        <span className="title">Twitter</span>
        <p>
          <a target="_blank" rel="noopener" href="https://twitter.com/8398a7">
            https://twitter.com/8398a7
          </a>
        </p>
      </li>
      <li className="collection-item avatar">
        <img src={wantedly} alt="" className="circle" />
        <span className="title">Wantedly</span>
        <p>
          <a target="_blank" rel="noopener" href="https://www.wantedly.com/users/2796548">
            https://www.wantedly.com/users/2796548
          </a>
        </p>
      </li>
    </ul>
  </div>
)

export default Links;
