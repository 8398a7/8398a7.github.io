import React from 'react';

const Card: React.SFC<{
  title: string;
  hrefText: string;
  href: string;
  icon: string;
  tags?: string[];
  children?: JSX.Element;
}> = ({ title, hrefText, href, icon, tags, children }) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={icon} alt={`${title} icon`} className="is-rounded" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">
            <a target="_blank" rel="noopener noreferrer" href={href}>
              {hrefText}
            </a>
          </p>
        </div>
      </div>
      {children ? (
        <div className="content has-text-left">
          {children}
          {tags
            ? tags.map(tag => (
                <span
                  key={`card-${tag}`}
                  style={{ marginLeft: '3px' }}
                  className="tag is-info"
                >
                  {tag}
                </span>
              ))
            : null}
        </div>
      ) : null}
    </div>
  </div>
);

export default Card;
