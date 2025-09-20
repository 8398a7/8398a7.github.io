import React from 'react';
import type { FC, ReactNode } from 'react';
import styles from './Card.module.css';

const Card: FC<{
  title: string;
  hrefText: string;
  href: string;
  icon: string;
  tags?: string[];
  children?: ReactNode;
}> = ({ title, hrefText, href, icon, tags, children }) => (
  <div className={`card ${styles.cardShell}`}>
    <div className={`card-content ${styles.cardContent}`}>
      <div className={`media ${styles.media}`}>
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={icon} alt={`${title} icon`} className="is-rounded" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">
            <a className={styles.cardLink} target="_blank" rel="noopener noreferrer" href={href}>
              {hrefText}
            </a>
          </p>
        </div>
      </div>
      {children ? (
        <div className={`content has-text-left ${styles.cardBody}`}>
          {children}
          {tags ? (
            <div className={styles.tagList}>
              {tags.map((tag) => (
                <span key={`card-${tag}`} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  </div>
);

export default Card;
