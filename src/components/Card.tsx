import * as React from 'react';

type bodyRenderProps = {
  title: string,
  line: string,
}

const bodyRender: React.StatelessComponent<bodyRenderProps> = ({ title, line }) => <p key={`${title}-${line}`}>{line}</p>;

type cardProps = {
  title: string,
  body: string[],
  link: string,
}

const Card: React.StatelessComponent<cardProps> = ({ title, body, link }) => (
  <div className="row">
    <div className="card light-blue accent-2">
      <div className="card-content white-text">
        <span className="card-title">{title}</span>
        {body.map(line => bodyRender({ title, line }))}
      </div>
      <div className="card-action">
        <a style={{ color: 'white' }} href={link} target="_blank" rel="noopener">
          <i className="fa fa-github" />
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Card;
