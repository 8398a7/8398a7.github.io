import React from 'react';

const bodyRender: React.SFC<{ title: string; line: string }> = ({
  title,
  line,
}) => <p key={`${title}-${line}`}>{line}</p>;

const Card: React.SFC<{ title: string; body: string[]; link: string }> = ({
  title,
  body,
  link,
}) => (
  <div className="row">
    <div className="card light-blue accent-2">
      <div className="card-content white-text">
        <span className="card-title">{title}</span>
        {body.map(line => bodyRender({ title, line }))}
      </div>
      <div className="card-action">
        <a
          style={{ color: 'white' }}
          href={link}
          target="_blank"
          rel="noopener"
        >
          <i className="fa fa-github" />
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Card;
