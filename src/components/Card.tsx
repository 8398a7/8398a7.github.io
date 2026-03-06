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
  <div className={styles.cardShell}>
    <div className={`p-6 sm:p-7 ${styles.cardContent}`}>
      <div className={`flex items-center gap-4 ${styles.media}`}>
        <div className="shrink-0">
          <figure className="h-12 w-12 overflow-hidden rounded-full">
            <img src={icon} alt={`${title} icon`} className="h-full w-full rounded-full object-cover" />
          </figure>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">{title}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            <a className={styles.cardLink} target="_blank" rel="noopener noreferrer" href={href}>
              {hrefText}
            </a>
          </p>
        </div>
      </div>
      {children ? (
        <div className={`text-left text-sm leading-7 text-slate-600 dark:text-slate-300 ${styles.cardBody}`}>
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
